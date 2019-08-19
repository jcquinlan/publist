from rest_framework import serializers
from ipware import get_client_ip
from core.models.user_book import UserBook

class UserBookReadSerializer(serializers.ModelSerializer):
    genres = serializers.StringRelatedField(many=True)
    authors = serializers.StringRelatedField(many=True)
    votes = serializers.StringRelatedField(many=True)

    class Meta:
        model = UserBook
        fields = (
            'id',
            'google_id',
            'title',
            'description',
            'authors',
            'genres',
            'publisher',
            'published_date',
            'thumbnail',
            'small_thumbnail',
            'explanation',
            'votes'
        )

    def to_representation(self, obj):
        print(self.context)
        ret = super().to_representation(obj)
        client_ip, is_routable = get_client_ip(self.context.get('request'))

        if client_ip:
            ret['has_voted'] = any(ip_address == client_ip for ip_address in ret['votes'])
        else:
            ret['has_voted'] = False

        ret['votes'] = len(ret['votes'])
        return ret

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
            'small_thumbnail',
            'explanation'
        )

    def create(self, validated_data):
        return UserBook.objects.create(**validated_data)
