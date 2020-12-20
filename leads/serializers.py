from rest_framework import serializers
from .models import Lead, Stackapi

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ('id', 'name', 'email', 'message')

class StackSearchapi(serializers.ModelSerializer):
    class Meta:
        model = Stackapi
        fields = '__all__'
