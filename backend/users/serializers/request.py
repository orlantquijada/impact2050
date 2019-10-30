from django.conf import settings

from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from drf_extra_fields.fields import Base64ImageField

from backend.users import models


class UserSignUpSerializer(serializers.Serializer):
    username = serializers.CharField(
        validators=[UniqueValidator(queryset=models.User.objects.all())],
        max_length=settings.MAX_LENGTH_USERNAME
    )
    password = serializers.CharField(max_length=settings.MAX_LENGTH_PASSWORD)
    confirm_password = serializers.CharField(max_length=settings.MAX_LENGTH_PASSWORD)
    profile_picture = Base64ImageField(required=False)
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=models.User.objects.all())],
        required=False
    )
    contact_number = serializers.CharField(
        max_length=settings.MAX_LENGTH_CONTACT_NUMBER,
        required=False
    )
    gender = serializers.CharField(
        max_length=1,
        required=False
    )
    first_name = serializers.CharField(max_length=settings.MAX_LENGTH_NAME)
    middle_name = serializers.CharField(max_length=settings.MAX_LENGTH_NAME, required=False)
    last_name = serializers.CharField(max_length=settings.MAX_LENGTH_NAME)
    blood_type = serializers.CharField(max_length=3, required=False)
    is_verified = serializers.BooleanField(default=False)

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError('Passwords do not match.')

        attrs['first_name'] = ' '.join([fname.capitalize() for fname in attrs['first_name'].split()])
        attrs['last_name'] = attrs['last_name'].capitalize()
        middle_name = attrs.get('middle_name', None)

        if middle_name:
            attrs['middle_name'] = middle_name.capitalize()

        return attrs