from django.urls import path
from .views import PlaceListCreateView, PlaceDetailView

urlpatterns = [
    path('places/', PlaceListCreateView.as_view(), name='place-list'),
    path('places/<int:pk>/', PlaceDetailView.as_view(), name='place-detail'),
]
