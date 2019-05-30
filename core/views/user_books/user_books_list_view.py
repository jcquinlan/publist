from django.db import transaction
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from core.models.user_book import UserBook
from core.models.user_book_genre import UserBookGenre
from core.models.user_book_author import UserBookAuthor
from core.serializers.user_book_serializers import (
    UserBookReadSerializer,
    UserBookWriteSerializer
)

class UserBooksListView(APIView):
    """
    GET - list all of a user's books
    POST - create a new UserBook record
    """

    permission_classes = (AllowAny,)

    def get(self, request, username):
        user = get_object_or_404(User, username=username)
        books = UserBook.objects.filter(user=user)
        serializer = UserBookReadSerializer(books, many=True)

        return Response(serializer.data, status=200)

    @transaction.atomic
    def post(self, request, username):
        user = get_object_or_404(User, username=username)
        authors = request.data.pop('authors')
        genres = request.data.pop('genres')

        serializer = UserBookWriteSerializer(data={**request.data, "user": user.id})

        if serializer.is_valid():
            book = serializer.save()

            for genre in genres:
                UserBookGenre.objects.create(book=book, genre=genre)

            for author in authors:
                UserBookAuthor.objects.create(book=book, author=author)

            return Response(UserBookReadSerializer(book).data, status=201)

        return Response(serializer.errors, status=400)
