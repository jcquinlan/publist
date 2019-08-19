from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from core.serializers.user_serializer import UserSerializer

class RegisterView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({}, status=201)

        return Response(serializer.errors, status=400)
