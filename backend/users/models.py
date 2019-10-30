from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.conf import settings

from backend.models import mixins
from backend.users import choices, managers


class User(AbstractBaseUser,
           PermissionsMixin,
           mixins.UUIDMixin,
           mixins.TimestampFieldsMixin):
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    username = models.CharField(
        max_length=settings.MAX_LENGTH_USERNAME, unique=True)

    user_type = models.CharField(
        max_length=2, choices=choices.USER_TYPES)

    USERNAME_FIELD = 'username'

    objects = managers.UserManager()

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return f'{self.username}'


class Customer(mixins.ContactMixin):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    profile_pic = models.ImageField(
        'Profile Picture',
        upload_to='users/',
        blank=True, null=True
    )

    gender = models.CharField(
        max_length=1,
        choices=choices.GENDERS,
        null=True, blank=True
    )

    blood_type = models.CharField(
        max_length=3,
        choices=choices.BLOOD_TYPES,
        null=True, blank=True
    )
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    def save(self, *args, **kwargs):
        names = [self.first_name.strip(), self.last_name]
        if self.middle_name:
            names.append(self.middle_name)

        for name in names:
            name = name.capitalize()

        super().save(*args, **kwargs)


class MedicalInstitution(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    name = models.CharField(max_length=settings.MAX_LENGTH_NAME)
    logo = models.ImageField(
        upload_to='institution/logos/', blank=True, null=True)
    is_partner = models.BooleanField(default=False)

    def __str__(self):
        partner = 'partner'
        non_partner = 'non-partner'

        return f'{self.id} | {self.name} - {partner if self.is_partner else non_partner}'


class DonationRequest(mixins.TimestampFieldsMixin):
    recipient = models.ForeignKey(Customer, on_delete=models.PROTECT)
    hospital = models.ForeignKey(MedicalInstitution, models.PROTECT)
    relation_to_patient = models.CharField(max_length=20)
    blood_type_of_patient = models.CharField(
        max_length=3,
        choices=choices.BLOOD_TYPES,
    )
    is_transfusion = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.id} | {self.recipient} - {self.hospital} - {self.relation_to_patient} - {self.blood_type_of_patient}'


class Appointment(mixins.TimestampFieldsMixin):
    appointment_datetime = models.DateTimeField()
    medical_institution = models.ForeignKey(
        MedicalInstitution, on_delete=models.PROTECT)
    donor = models.ForeignKey(Customer, on_delete=models.PROTECT)
    is_willing_for_transfusion = models.BooleanField(default=False)

    def __str__(self):
        is_willing = 'is willing'
        not_willing = 'not willing'
        return f'{self.appointment_datetime} | {self.medical_institution} | {self.donor} | {is_willing if self.is_willing_for_transfusion else not_willing}'


class Event(models.Model):
    name = models.CharField(max_length=settings.MAX_LENGTH_NAME)
    location = models.CharField(max_length=settings.MAX_LENGTH_LOCATION)
    event_datetime = models.DateTimeField()
    contact_number = models.CharField(
        max_length=settings.MAX_LENGTH_CONTACT_NUMBER)
    description = models.TextField()
    medical_institution = models.ForeignKey(
        MedicalInstitution, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.id} | {self.name} - {self.event_datetime}'
