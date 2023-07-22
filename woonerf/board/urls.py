from django.urls import path, include
from .views import BlogViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('blog', BlogViewSet)

urlpatterns =[
    path('', include(router.urls))
]