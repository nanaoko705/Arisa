from django.contrib import admin
from django.urls import path, include
from woonerf import urls
from django.conf import settings
from django.conf.urls.static import static
from django.views   .generic import TemplateView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("user/", include('account.urls')),  # Comma was missing here
    path("", include('board.urls')),
    path('react/', TemplateView.as_view(template_name='index.html')), # TemplateView를 써서 readct 화면으로 넘어가도록 했음, 나중엔 기본경로로 바꿀 예정

]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
