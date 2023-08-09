from django.contrib import admin
from django.urls import path, include
from woonerf import urls
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("user/", include('account.urls')),  # Comma was missing here
    path("", include('board.urls')),
    path("", include('About.urls')),

]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
