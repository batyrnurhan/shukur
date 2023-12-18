from django.db import models

class Place(models.Model):
    name = models.CharField(max_length=200)
    certified = models.BooleanField()
    halal = models.BooleanField()
    alcohol = models.BooleanField()
    rating = models.FloatField()
    prayer_facility = models.BooleanField()
    address = models.TextField()

    def __str__(self):
        return self.name
