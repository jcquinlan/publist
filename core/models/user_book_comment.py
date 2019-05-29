from django.db import models
from core.models.user_book import UserBook

class UserBookComment(models.Model):
    book = models.ForeignKey(UserBook, on_delete=models.CASCADE)
    comment = models.CharField(max_length=64)
    author_name = models.CharField(max_length=64)
