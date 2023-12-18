from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    full_name = models.CharField(max_length=100, blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    avatar = models.ImageField(upload_to="avatars/%Y/%m/%d/", null=True, blank=True)
    adres = models.ForeignKey("Adres", on_delete=models.SET_NULL, null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.pk:  # Checking if this is a new record
            self.is_active = True  # Set users as active by default
        super(CustomUser, self).save(*args, **kwargs)
    def __str__(self):
        return self.username
class Adres(models.Model):
    city=models.CharField(max_length=255,default="")
    district =models.CharField(max_length=255,default="")
    home=models.CharField(max_length=255,default="")
class Review(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='reviews')
    review_text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review by {self.user.username}"
