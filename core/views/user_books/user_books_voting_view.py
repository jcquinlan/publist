import humps
from ipware import get_client_ip
from django.db import transaction
from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from core.models.user_book import UserBook
from core.models.user_book_vote import UserBookVote

class UserBooksVotingView(APIView):
    """
    POST - vote on a book
    """

    permission_classes = (AllowAny,)

    @transaction.atomic
    def post(self, request, book_id):
        book = get_object_or_404(UserBook, id=book_id)

        if book.user == request.user:
            return Response({"error": "You cannot vote on your own books"}, status=400)

        action = request.data.get('action', None)
        client_ip, is_routable = get_client_ip(request)

        if client_ip:
            try:
                preexisting_vote = UserBookVote.objects.get(book=book, ip_address=client_ip)
            except UserBookVote.DoesNotExist:
                preexisting_vote = None

            if action == 'inc':
                if preexisting_vote:
                    return Response({"error": "This user has already voted"}, status=400)
                else:
                    UserBookVote.objects.create(book=book, ip_address=client_ip)

            elif action == 'dec':
                if preexisting_vote:
                    preexisting_vote.delete()
                else:
                    return Response({"error": "This user has not yet voted"}, status=400)

            else:
                return Response({"error": "You must supply an action type"}, status=400)

        else:
            return Response({"error": "No IP address found"}, status=400)

        return Response({}, status=200)
