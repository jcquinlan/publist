from django.db import models
from django.contrib.auth.models import User

class UserBook(models.Model):
    """
    Represents the basic unit of the app: a book on a user's list
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    google_id = models.CharField(max_length=64, null=True)
    title = models.CharField(max_length=128, null=True)
    description = models.TextField(max_length=10000, null=True)
    publisher = models.CharField(max_length=64, null=True)
    published_date = models.DateField(null=True)
    thumbnail = models.URLField(null=True)
    small_thumbnail = models.URLField(null=True)
    explanation = models.TextField(max_length=512, null=True)
    archived = models.BooleanField(default=False)
