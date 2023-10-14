from django.urls import path
from .views import ClassViewSet

# Blog 목록 보여주기
Class_list = ClassViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

# Blog detail 보여주기 + 수정 + 삭제
Class_detail = ClassViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})

urlpatterns =[
    path('class/', Class_list),
    path('class/<int:pk>/', Class_detail),
]