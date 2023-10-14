from django.urls import path, include
from . import views

urlpatterns = [
    path('signup/', views.UserCreate.as_view()),
    path('api-auth/', include('rest_framework.urls')),
]