from django.db import models
from django.contrib.auth.models import User
from accounts.models import CustomUser
class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    certified = models.BooleanField(default=False)
    rating = models.FloatField(default=0.0)
    details = models.TextField()
    ingredients = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    parameter = models.TextField()

    def __str__(self):
        return self.name

class ProductRating(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='ratings')
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    rating = models.FloatField()

    def __str__(self):
        return f"{self.product.name} - {self.rating}"


class ProductImage(models.Model):
    product = models.ForeignKey(Product, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='product_images/')

    def __str__(self):
        return f"Image for {self.product.name}"


class ProductRequest(models.Model):
    name = models.CharField(max_length=100)
    details = models.TextField(blank=True)
    requested_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    status = models.CharField(max_length=50, default='pending')

    def __str__(self):
        return f"Request for {self.name} by {self.requested_by.username}"