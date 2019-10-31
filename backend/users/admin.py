from django.contrib import admin

from backend.users.models import (
    User, MedicalInstitution, DonationRequest, Customer, Appointment, Event, Incentive,
    Donation, RedeemCode
)

admin.site.register(User)
admin.site.register(DonationRequest)
admin.site.register(MedicalInstitution)
admin.site.register(Customer)
admin.site.register(Appointment)
admin.site.register(Event)
admin.site.register(Incentive)
admin.site.register(Donation)
admin.site.register(RedeemCode)
