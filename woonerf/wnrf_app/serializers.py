from wnrf_app.models import Board
from rest_framework import serializers
from .models import wnrf_app


class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = [
            "id",
            "author_email",
            "title",
            "content",
            "dt_created",
            "dt_modified",
        ]

    author_email = serializers.SerializerMethodField("get_authors_email")

    def get_authors_email(self, obj):
        return obj.author.email
        

class BoardDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = [
            "id",
            "author_email",
            "title",
            "content",
            "dt_created",
            "dt_modified",
        ]

    author_email = serializers.SerializerMethodField("get_authors_email")

    def get_authors_email(self, obj):
        return obj.author.email