from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    # path('api/lead/', views.LeadListCreate.as_view() ),
    path('api/stack', views.stacksearch, name='stacksearch'),
]
