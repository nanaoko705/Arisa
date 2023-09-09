from django.contrib import admin
from django.urls import path, include
from woonerf import urls
from django.conf import settings
from django.conf.urls.static import static
from django.views   .generic import TemplateView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("user/", include('account.urls')),  # Comma was missing here
    # path("", include('board.urls')),
    path('', TemplateView.as_view(template_name='index.html')),

]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
