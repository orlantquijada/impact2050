from django.conf import settings

from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
from rest_framework.validators import UniqueValidator

from backend.users import models


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=models.User.objects.all())],
        required=False
    )
    username = serializers.CharField(
        validators=[UniqueValidator(queryset=models.User.objects.all())],
        max_length=settings.MAX_LENGTH_USERNAME, read_only=True
    )
    profile_picture = Base64ImageField(required=False)


    class Meta:
        model = models.User
        fields = (
            'id', 'first_name', 'middle_name', 'last_name', 'email', 'username', 'gender',
            'contact_number', 'profile_picture', 'blood_type', 'is_verified'
        )

    def validate(self, attrs):
        attrs['first_name'] = ' '.join([fname.capitalize() for fname in attrs['first_name'].split()])
        attrs['last_name'] = attrs['last_name'].capitalize()
        middle_name = attrs.get('middle_name', None)

        if middle_name:
            attrs['middle_name'] = middle_name.capitalize()

        return attrs