from django.db import models
from core.models.user_book import UserBook

class UserBookAuthor(models.Model):
    book = models.ForeignKey(UserBook, on_delete=models.CASCADE)
    name = models.CharField(max_length=64)
