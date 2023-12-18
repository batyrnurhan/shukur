from django.db import models
from ckeditor.fields import RichTextField
from django.utils import timezone

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    text = RichTextField()
    image1 = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    image2 = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    image3 = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title
