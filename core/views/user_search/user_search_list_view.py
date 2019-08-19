from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from core.serializers.user_search_serializer import UserSearchSerializer

class UserSearchListView(APIView):
    """
    GET - Query for user accounts
    """

    permission_classes = (AllowAny,)

    def get(self, request, username_query):
        users = User.objects.filter(username__contains=username_query)
        serializer = UserSearchSerializer(users, many=True)

        return Response(serializer.data, status=200)
