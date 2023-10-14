from django.urls import path
from .views import AboutViewSet

# Blog 목록 보여주기
about_list = AboutViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

# Blog detail 보여주기 + 수정 + 삭제
about_detail = AboutViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})

urlpatterns =[
    path('about/', about_list),
    path('about/<int:pk>/', about_detail),
]