"""publist URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include, re_path
from core.views.frontend_view import FrontendView
from core.views.register import RegisterView
from core.views.obtain_pair_view import TokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView
)

# Business Logic Views
from core.views.search_books_view import SearchBooksView
from core.views.user_books.user_books_list_view import UserBooksListView

urlpatterns = [
    path('admin', admin.site.urls),
    path('api-auth', include('rest_framework.urls')),
    path('api/token', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/register', RegisterView.as_view(), name='register'),
    path('api/books/search', SearchBooksView.as_view(), name='search_books'),
    path('api/books/<username>', UserBooksListView.as_view(), name='user_books_list'),
    re_path(r'^', FrontendView.as_view()),
]
