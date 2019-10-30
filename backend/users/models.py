from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.conf import settings

from backend.models import mixins
from backend.users import choices, managers

class User(AbstractBaseUser,
		   PermissionsMixin,
		   mixins.ContactMixin,
		   mixins.UUIDMixin,
		   mixins.TimestampFieldsMixin):

	is_staff = models.BooleanField(default=False)
	is_superuser = models.BooleanField(default=False)

	username = models.CharField(max_length=settings.MAX_LENGTH_USERNAME, unique=True)

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

	USERNAME_FIELD = 'username'

	objects = managers.UserManager()


	class Meta:
		ordering = ('-created_at',)

	def __str__(self):
		return f'{self.first_name} {self.last_name}'

	def save(self, *args, **kwargs):
		names = [self.first_name.strip(), self.last_name]
		if self.middle_name:
			names.append(self.middle_name)

		for name in names:
			name = name.capitalize()
		super().save(*args, **kwargs)