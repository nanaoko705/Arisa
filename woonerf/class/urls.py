from django.urls import path, include
from .views import ClassViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('class_list', ClassViewSet)

urlpatterns =[
    path('', include(router.urls))
]