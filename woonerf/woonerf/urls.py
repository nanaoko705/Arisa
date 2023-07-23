from django.contrib import admin
from django.urls import path, include
from woonerf import urls

urlpatterns = [
    path("admin/", admin.site.urls),
    path("user/", include('account.urls')),  # Comma was missing here
    path("", include('board.urls')),
    path('api-auth/', include('rest_framework.urls')),

]
