from django.urls import path
from . import views

urlpatterns =[
    path('', views.get_replies),
    path('', views.post_replies),

]