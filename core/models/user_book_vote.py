from django.db import models
from core.models.user_book import UserBook

class UserBookGenre(models.Model):
    """
    We will want users to be unable to spam vote for books on a list
    so we can track the IP and only accept votes for books from unique
    addresses.
    """
    book = models.ForeignKey(UserBook, on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=64)
