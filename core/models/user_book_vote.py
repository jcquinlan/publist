from django.db import models
from core.models.user_book import UserBook

class UserBookVote(models.Model):
    """
    We will want users to be unable to spam vote for books on a list
    so we can track the IP and only accept votes for books from unique
    addresses.
    """
    book = models.ForeignKey(UserBook, related_name="votes", on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=64, null=True)

    def __str__(self):
        return self.ip_address
