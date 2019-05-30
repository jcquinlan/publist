from django.contrib import admin
from core.models.user_book import UserBook
from core.models.user_book_author import UserBookAuthor
from core.models.user_book_comment import UserBookComment
from core.models.user_book_genre import UserBookGenre
from core.models.user_book_vote import UserBookVote

# Register your models here.
admin.site.register(UserBook)
admin.site.register(UserBookAuthor)
admin.site.register(UserBookComment)
admin.site.register(UserBookGenre)
admin.site.register(UserBookVote)
