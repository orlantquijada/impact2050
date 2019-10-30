from django.db import transaction

from rest_framework import mixins, viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from backend.users import models, serializers, choices


class UserViewSet(mixins.ListModelMixin,
                  viewsets.GenericViewSet):

    queryset = models.User.objects.all()
    serializer_class = serializers.base.UserSerializer

    @action(methods=['POST'], detail=False)
    def signup(self, request):
        serializer = serializers.request.CustomerSignupSerializer(
            data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        username = serializer.validated_data.pop('username')
        password = serializer.validated_data.pop('password')
        serializer.validated_data.pop('confirm_password')

        user = models.User.objects.create_user(
            username, password)
        user.user_type = choices.CUSTOMER
        user.save()

        customer = models.Customer.objects.create(
            user=user, **serializer.validated_data)

        return Response(
            serializers.base.CustomerSerializer(customer).data,
            status=status.HTTP_201_CREATED
        )

    @action(methods=['POST'], detail=False)
    def login(self, request):
        serializer = serializers.request.UserLoginSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        username = serializer.validated_data.pop('username')
        password = serializer.validated_data.pop('password')

        is_authenticated = True
        try:
            user = models.User.objects.get(username=username)

            if not user.check_password(password):
                is_authenticated = False

        except models.User.DoesNotExist:
            is_authenticated = False

        if not is_authenticated:
            return Response(
                'Username, email, or password is invalid.',
                status=status.HTTP_401_UNAUTHORIZED
            )

        return Response(
            serializers.base.UserSerializer(user).data,
            status=status.HTTP_200_OK
        )


class CustomerViewSet(mixins.CreateModelMixin,
                      mixins.ListModelMixin,
                      mixins.UpdateModelMixin,
                      mixins.RetrieveModelMixin,
                      viewsets.GenericViewSet):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.extended.ExtendedCustomerSerializer

    def get_serializer_class(self):
        if self.action == 'create':
            return serializers.base.CustomerSerializer

        return super().get_serializer_class()


class MedicalInstituteViewSet(mixins.ListModelMixin,
                              mixins.UpdateModelMixin,
                              mixins.RetrieveModelMixin,
                              viewsets.GenericViewSet):
    queryset = models.MedicalInstitution.objects.all()
    serializer_class = serializers.base.MedicalInstitutionSerializer

    def get_serializer_class(self):
        if self.action == 'list':
            return serializers.extended.ExtendedMedicalInstituteSerializer

        return super().get_serializer_class()


class DonationRequestViewSet(mixins.ListModelMixin,
                             mixins.CreateModelMixin,
                             mixins.RetrieveModelMixin,
                             viewsets.GenericViewSet):
    queryset = models.DonationRequest.objects.all()
    serializer_class = serializers.base.DonationRequestSerializer

    def get_serializer_class(self):
        if self.action == 'list':
            return serializers.extended.ExtendedDonationRequestSerializer

        return super().get_serializer_class()

    @transaction.atomic
    def create(self, request, *args, **kwargs):
        serializer = serializers.request.DonationRequestSerializer(
            data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        hospital_name = serializer.validated_data.pop('hospital_name')

        try:
            hospital = models.MedicalInstitution.objects.get(
                name=hospital_name)
            donation_request = models.DonationRequest.objects.create(
                hospital=hospital,
                **serializer.validated_data
            )
        except models.MedicalInstitution.DoesNotExist:
            created_user = models.User.objects.create_user(
                hospital_name, 'genericPassword', user_type='MI')
            created_hospital = models.MedicalInstitution.objects.create(
                user=created_user, name=hospital_name)
            donation_request = models.DonationRequest.objects.create(
                hospital=created_hospital,
                **serializer.validated_data
            )

        return Response(serializers.base.DonationRequestSerializer(donation_request).data, status=status.HTTP_201_CREATED)


class AppointmentViewSet(mixins.CreateModelMixin,
                         mixins.ListModelMixin,
                         mixins.RetrieveModelMixin,
                         viewsets.GenericViewSet):
    queryset = models.Appointment.objects
    serializer_class = serializers.extended.ExtededAppointmentSerializer

    def get_serializer_class(self):
        if self.action == 'create':
            return serializers.base.AppointmentSerializer

        return super().get_serializer_class()

    def get_queryset(self):
        queryset = self.queryset

        serializer = serializers.query.AppointmentQuerySerializer(
            data=self.request.query_params
        )

        if not serializer.is_valid():
            return queryset.all()

        medical_institution_id = serializer.validated_data.get(
            'medical_institution_id', None)
        if medical_institution_id:
            queryset = queryset.filter(
                medical_institution_id=medical_institution_id)

        donor_id = serializer.validated_data.get('donor_id', None)
        if donor_id:
            queryset = queryset.filter(donor_id=donor_id)

        return queryset.all()


class EventViewSet(mixins.CreateModelMixin,
                   mixins.ListModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   viewsets.GenericViewSet):
    queryset = models.Event.objects
    serializer_class = serializers.extended.ExtendedEventSerializer

    def get_serializer_class(self):
        if self.action == 'create':
            return serializers.base.EventSerializer

        return super().get_serializer_class()

    def get_queryset(self):
        queryset = self.queryset

        serializer = serializers.query.EventQuerySerializer(
            data=self.request.query_params
        )

        if not serializer.is_valid():
            return queryset.all()

        medical_institution_id = serializer.validated_data.get(
            'medical_institution_id', None)
        if medical_institution_id:
            queryset = queryset.filter(
                medical_institution_id=medical_institution_id)

        return queryset.all()
