from django.urls import path, include
from .views import AboutViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('about', AboutViewSet)

urlpatterns =[
    path('', include(router.urls))
]