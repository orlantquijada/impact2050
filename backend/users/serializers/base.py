from django.conf import settings

from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
from rest_framework.validators import UniqueValidator

from backend.users import models
from backend.utils import globals


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ('id', 'username', 'user_type')


class CustomerSerializer(serializers.ModelSerializer):
    username = serializers.CharField(
        validators=[UniqueValidator(queryset=models.User.objects.all())],
        max_length=settings.MAX_LENGTH_USERNAME,
        read_only=True
    )
    profile_picture = Base64ImageField(required=False)
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=models.User.objects.all())],
        required=False
    )
    user_id = serializers.CharField(
        max_length=settings.MAX_LENGTH_NAME,
        source='user.id',
        read_only=True
    )

    class Meta:
        model = models.Customer
        fields = (
            'id', 'username', 'user_id', 'profile_picture', 'email', 'contact_number', 'gender',
            'first_name', 'middle_name', 'last_name', 'blood_type', 'is_verified'
        )

    def validate(self, attrs):
        attrs['first_name'] = ' '.join(
            [fname.capitalize() for fname in attrs['first_name'].split()])
        attrs['last_name'] = attrs['last_name'].capitalize()
        middle_name = attrs.get('middle_name', None)

        if middle_name:
            attrs['middle_name'] = middle_name.capitalize()

        return attrs


class MedicalInstitutionSerializer(serializers.ModelSerializer):
    user_id = serializers.CharField(
        max_length=settings.MAX_LENGTH_NAME,
        source='user.id',
        read_only=True
    )
    logo = Base64ImageField(required=False)

    class Meta:
        model = models.MedicalInstitution
        fields = ('id', 'name', 'logo', 'user_id', 'is_partner')


class DonationRequestSerializer(serializers.ModelSerializer):
    recipient_id = serializers.PrimaryKeyRelatedField(
        queryset=models.Customer.objects.all(),
        source='recipient'
    )
    hospital_id = serializers.PrimaryKeyRelatedField(
        queryset=models.MedicalInstitution.objects.all(),
        source='hospital',
        required=False
    )

    class Meta:
        model = models.DonationRequest
        fields = ('id', 'recipient_id', 'hospital_id',
                  'relation_to_patient', 'blood_type_of_patient', 'is_transfusion')


class AppointmentSerializer(serializers.ModelSerializer):
    appointment_datetime = serializers.DateTimeField(
        format=globals.DATETIME_FORMAT,
        input_formats=(globals.DATETIME_FORMAT,)
    )
    medical_institution_id = serializers.PrimaryKeyRelatedField(
        queryset=models.MedicalInstitution.objects.all(),
        source='medical_institution'
    )
    donor_id = serializers.PrimaryKeyRelatedField(
        queryset=models.Customer.objects.all(),
        source='donor'
    )

    class Meta:
        model = models.Appointment
        fields = ('id', 'appointment_datetime', 'medical_institution_id',
                  'donor_id', 'is_willing_for_transfusion')
