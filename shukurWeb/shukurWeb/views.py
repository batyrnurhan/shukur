# views.py

# ... (other imports)
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

from accounts.models import CustomUser, Adres, Review
from blogs.models import BlogPost
from products.models import Category, Product, ProductRating, ProductRequest
def search(request):
    query = request.GET.get('query', '')

    # Searching in each model
    users = CustomUser.objects.filter(Q(username__icontains=query) | Q(full_name__icontains=query))
    addresses = Adres.objects.filter(Q(city__icontains=query) | Q(district__icontains=query) | Q(home__icontains=query))
    reviews = Review.objects.filter(review_text__icontains=query)
    blog_posts = BlogPost.objects.filter(title__icontains=query)
    categories = Category.objects.filter(name__icontains=query)
    products = Product.objects.filter(name__icontains=query)
    product_ratings = ProductRating.objects.filter(Q(product__name__icontains=query) | Q(rating__icontains=query))
    product_requests = ProductRequest.objects.filter(name__icontains=query)

    # Combine results
    results = {
        'users': list(users.values()),
        'addresses': list(addresses.values()),
        'reviews': list(reviews.values()),
        'blog_posts': list(blog_posts.values()),
        'categories': list(categories.values()),
        'products': list(products.values()),
        'product_ratings': list(product_ratings.values()),
        'product_requests': list(product_requests.values())
    }

    return JsonResponse(results)
