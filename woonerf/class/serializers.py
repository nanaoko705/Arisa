from .models import Class
from rest_framework import serializers

class ClassSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source = 'user.nickname')
    image = serializers.ImageField(use_url=True, required=False)
    class Meta:
        model = Class
        fields = ['id', 'title', 'created_at', 'user', 'body','image']