from django.urls import path
from . import views

urlpatterns =[
    path('', views.create_reply),
    path('<int:pk>/replies', views.reply_details),

]