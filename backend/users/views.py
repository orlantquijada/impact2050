from rest_framework import mixins, viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from backend.users import models, serializers


class UserViewSet(mixins.ListModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.DestroyModelMixin,
                  viewsets.GenericViewSet):

    queryset = models.User.objects.all()
    serializer_class = serializers.base.UserSerializer

    @action(methods=['POST'], detail=False)
    def signup(self, request):
        serializer = serializers.request.UserSignUpSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        username = serializer.validated_data.pop('username')
        password = serializer.validated_data.pop('password')
        serializer.validated_data.pop('confirm_password')

        user = models.User.objects.create_user(username, password, **serializer.validated_data)

        return Response(
            serializers.base.UserSerializer(user).data,
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
        except models.User.DoesNotExist:
            is_authenticated = False

        if not user.check_password(password):
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