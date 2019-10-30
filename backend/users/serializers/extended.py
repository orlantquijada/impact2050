from backend.users import serializers as user_serializers


class ExtendedCustomerSerializer(user_serializers.base.CustomerSerializer):
    user = user_serializers.base.UserSerializer(read_only=True)

    class Meta:
        model = user_serializers.base.CustomerSerializer.Meta.model
        fields = user_serializers.base.CustomerSerializer.Meta.fields + \
            ('user',)


class ExtendedMedicalInstituteSerializer(user_serializers.base.MedicalInstitutionSerializer):
    user = user_serializers.base.UserSerializer(read_only=True)

    class Meta:
        model = user_serializers.base.MedicalInstitutionSerializer.Meta.model
        fields = user_serializers.base.MedicalInstitutionSerializer.Meta.fields + \
            ('user',)


class ExtendedDonationRequestSerializer(user_serializers.base.DonationRequestSerializer):
    recipient = user_serializers.base.CustomerSerializer(read_only=True)
    hospital = user_serializers.base.MedicalInstitutionSerializer(
        read_only=True)

    class Meta:
        model = user_serializers.base.DonationRequestSerializer.Meta.model
        fields = user_serializers.base.DonationRequestSerializer.Meta.fields + \
            ('recipient', 'hospital')


class ExtededAppointmentSerializer(user_serializers.base.AppointmentSerializer):
    medical_institution = user_serializers.base.MedicalInstitutionSerializer(
        read_only=True)
    donor = user_serializers.base.CustomerSerializer(read_only=True)

    class Meta:
        model = user_serializers.base.AppointmentSerializer.Meta.model
        fields = user_serializers.base.AppointmentSerializer.Meta.fields + \
            ('medical_institution', 'donor')
