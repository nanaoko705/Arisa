from .models import About
from rest_framework import serializers

class AboutSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source = 'user.nickname')
    image = serializers.ImageField(use_url=True)
    class Meta:
        model = About
        fields = ['id', 'user', 'body','image']