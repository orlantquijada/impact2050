from django.urls import path, include

from rest_framework import routers

from backend.users import views


ROUTER = routers.DefaultRouter()

ROUTER.register('users', views.UserViewSet)
ROUTER.register('customers', views.CustomerViewSet)
ROUTER.register('medical-institutions', views.MedicalInstituteViewSet)
ROUTER.register('donation-requests', views.DonationRequestViewSet)
ROUTER.register('appointments', views.AppointmentViewSet)
ROUTER.register('events', views.EventViewSet)

url_patterns = path('', include(ROUTER.urls))
