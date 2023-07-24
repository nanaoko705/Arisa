from .models import Blog
from .serializers import BlogSerializer
from rest_framework import viewsets

# Blog의 목록, detail 보여주기, 수정하기, 삭제하기 모두 가능
class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
   
   	# serializer.save() 재정의
    def perform_create(self, serializer):
        serializer.save(user = self.request.user)   
    
    #Blog list 출력
    def get(self, request, *args, **kwargs):
        return self.list(request)

    #Blog 생성
    def post(self, request, *args, **kwargs):
        return self.create(request)