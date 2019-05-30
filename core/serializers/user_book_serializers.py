from rest_framework import serializers
from core.models.user_book import UserBook

class UserBookReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserBook
        fields = (
            'google_id',
            'title',
            'description',
            'publisher',
            'published_date',
            'thumbnail',
            'small_thumbnail'
        )

class UserBookWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserBook
        fields = (
            'user',
            'google_id',
            'title',
            'description',
            'publisher',
            'published_date',
            'thumbnail',
            'small_thumbnail'
        )

    def create(self, validated_data):
        return UserBook.objects.create(**validated_data)
