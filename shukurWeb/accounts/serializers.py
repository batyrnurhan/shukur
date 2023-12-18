from djoser.serializers import UserCreateSerializer
from rest_framework import serializers

from .models import CustomUser
from .models import Review

class CustomUserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = CustomUser

        fields = ['username', 'first_name', 'last_name', 'email', 'password']


# serializers.py

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'full_name', 'phone_number', 'avatar', 'adres']

class ReviewSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ['id', 'user', 'review_text', 'created_at']
