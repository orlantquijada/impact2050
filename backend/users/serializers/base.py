from django.conf import settings

from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
from rest_framework.validators import UniqueValidator

from backend.users import models


class User(serializers.ModelSerializer):
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=models.User.objects.all())]
    )
    username = serializers.CharField(max_length=settings.MAX_LENGTH_USERNAME)
    password = serializers.CharField(max_length=settings.MAX_LENGTH_PASSWORD)
    confirm_password = serializers.CharField(max_length=settings.MAX_LENGTH_PASSWORD)


    class Meta:
        model = model.User
        fields = ('first_name', 'middle_name', 'last_name', 'email', 'username')