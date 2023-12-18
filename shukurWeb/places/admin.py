from django.contrib import admin
from .models import Place

@admin.register(Place)
class PlaceAdmin(admin.ModelAdmin):
    list_display = ['name', 'certified', 'halal', 'alcohol', 'rating', 'prayer_facility', 'address']
