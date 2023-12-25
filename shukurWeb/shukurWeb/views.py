from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import requests

# views.py

class PrayerTimesView(APIView):
    def get(self, request, id=None):
        api_url = "https://namaztimes.kz/api/praytimes"
        location_id = id or 8408  # Default ID if none is provided

        params = {"id": location_id, "type": "json"}
        response = requests.get(api_url, params=params)

        if response.status_code == 200:
            return Response(response.json())
        else:
            return Response({"error": "Failed to fetch prayer times"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

from django.db.models import Q
from django.http import JsonResponse
from blogs.models import BlogPost
from products.models import Product
from blogs.serializers import BlogPostSerializer
from products.serializers import ProductSerializer

def search(request):
    query = request.GET.get('query', '')

    # Query for Blog Posts
    blog_posts = BlogPost.objects.filter(title__icontains=query)
    blog_post_serializer = BlogPostSerializer(blog_posts, many=True)

    # Query for Products
    products = Product.objects.filter(name__icontains=query)
    product_serializer = ProductSerializer(products, many=True)

    # Combine results
    results = {
        'blog_posts': blog_post_serializer.data,
        'products': product_serializer.data
    }

    return JsonResponse(results, safe=False)