from rest_framework import generics
from .models import Review, CustomUser
from .serializers import ReviewSerializer, CustomUserSerializer
from rest_framework.permissions import IsAuthenticated

class User_profile_View(generics.RetrieveAPIView):
    serializer_class = CustomUserSerializer
    permission_classes = [IsAuthenticated]  # Directly use IsAuthenticated

    def get_object(self):
        return self.request.user

class ReviewListCreateView(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
