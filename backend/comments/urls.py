from django.urls import path
from . import views

urlpatterns =[
    path('all/', views.comments_list),
    path('<str:video_id>/', views.user_comments),
    path('<int:pk>/update', views.update_user_comments),
    path('', views.post_comments),

]