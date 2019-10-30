from django.conf import settings
from django.db import transaction

from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from drf_extra_fields.fields import Base64ImageField

from backend.users import models
from backend.users import serializers as users_serializers


class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=settings.MAX_LENGTH_USERNAME)
    password = serializers.CharField(max_length=settings.MAX_LENGTH_PASSWORD)


class CustomerSignupSerializer(serializers.ModelSerializer):
    username = serializers.CharField(
        validators=[UniqueValidator(queryset=models.User.objects.all())],
        max_length=settings.MAX_LENGTH_USERNAME
    )
    password = serializers.CharField(
        max_length=settings.MAX_LENGTH_PASSWORD, write_only=True)
    confirm_password = serializers.CharField(
        max_length=settings.MAX_LENGTH_PASSWORD, write_only=True)
    profile_picture = Base64ImageField(required=False)
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=models.User.objects.all())],
        required=False
    )

    class Meta:
        model = models.Customer
        fields = (
            'id', 'username', 'password', 'confirm_password', 'profile_picture', 'email',
            'contact_number', 'gender', 'first_name', 'middle_name', 'last_name',
            'blood_type', 'is_verified'
        )

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError('Passwords do not match.')

        attrs['first_name'] = ' '.join(
            [fname.capitalize() for fname in attrs['first_name'].split()])
        attrs['last_name'] = attrs['last_name'].capitalize()
        middle_name = attrs.get('middle_name', None)

        if middle_name:
            attrs['middle_name'] = middle_name.capitalize()

        return attrs


class DonationRequestSerializer(users_serializers.base.DonationRequestSerializer):
    hospital_name = serializers.CharField(max_length=settings.MAX_LENGTH_NAME)

    class Meta:
        model = users_serializers.base.DonationRequestSerializer.Meta.model
        fields = users_serializers.base.DonationRequestSerializer.Meta.fields + \
            ('hospital_name',)
