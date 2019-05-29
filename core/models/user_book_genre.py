from django.db import models
from core.models.user_book import UserBook

class UserBookGenre(models.Model):
    book = models.ForeignKey(UserBook, on_delete=models.CASCADE)
    genre = models.CharField(max_length=64)
