import os
import json
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings


class SearchBooksView(APIView):
    """
    Uses the Google Books API to retrieve book search results for a user.
    """

    permission_classes = (AllowAny,)

    def post(self, request):
        """
        Handles user searches for books from the Google Books API
        """
        query = request.data.get('query')
        request_url = 'https://www.googleapis.com/books/v1/volumes?q={0}&key={1}' \
            .format(query, settings.GOOGLE_BOOKS_API_KEY)

        search_results = requests.get(request_url)

        return Response(search_results.json(), status=200)
