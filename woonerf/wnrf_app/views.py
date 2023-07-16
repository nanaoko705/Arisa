from django.shortcuts import render
from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from knox.auth import TokenAuthentication
from .permissions import IsOwnerOrReadOnly
from .serializers import BoardSerializer, BoardDetailSerializer
from .models import Person

# Create your views here.
class BoardAPI(generics.ListCreateAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class BoardDetailAPI(generics.RetrieveUpdateDestroyAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardDetailSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsOwnerOrReadOnly]