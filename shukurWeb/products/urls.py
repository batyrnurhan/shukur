from django.urls import path
from .views import ProductListCreateView, CategoryListCreateView, ProductRequestCreateView, CertifiedProductsView, NonCertifiedProductsView

urlpatterns = [
    path('list/', ProductListCreateView.as_view(), name='product-list'),
    path('certified/', CertifiedProductsView.as_view(), name='certified-products'),
    path('non-certified/', NonCertifiedProductsView.as_view(), name='non-certified-products'),
    path('categories/', CategoryListCreateView.as_view(), name='category-list'),
    path('product-requests/', ProductRequestCreateView.as_view(), name='product-request-create'),

]
