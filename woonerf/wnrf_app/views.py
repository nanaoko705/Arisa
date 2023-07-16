from django.shortcuts import render
from rest_framework import viewsets
from wnrf_app.serializers import PersonSerializer
from wnrf_app.models import Person

# Create your views here.
class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer