# Generated by Django 4.2.7 on 2023-12-18 10:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='image1',
            field=models.ImageField(blank=True, null=True, upload_to='blog_images/'),
        ),
        migrations.AddField(
            model_name='blogpost',
            name='image2',
            field=models.ImageField(blank=True, null=True, upload_to='blog_images/'),
        ),
        migrations.AddField(
            model_name='blogpost',
            name='image3',
            field=models.ImageField(blank=True, null=True, upload_to='blog_images/'),
        ),
    ]
