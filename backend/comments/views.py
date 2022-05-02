from asyncore import read
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer
from django.shortcuts import get_object_or_404

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def comments_list(request):
    comment = Comment.objects.all()
    serializer = CommentSerializer(comment, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

# @api_view(['GET', 'PUT', 'POST'])
# @permission_classes([IsAuthenticated])
# def user_comments(request, video_id):

#     print(
#         'User ', f"{request.user.id} {request.user.email} {request.user.username}")
        
#     if request.method == 'POST':
#         serializer = CommentSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(user=request.user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#     elif request.method == 'GET':
#         comments = Comment.objects.filter(video_id=request.user.id)
#         serializer = CommentSerializer(comments, many=True)
#         return Response(serializer.data)    


@api_view(['PUT', 'GET'])
@permission_classes([IsAuthenticated])
def update_user_comments(request, pk):

    print(
        'User ', f"{request.user.id} {request.user.username}")
    comment = get_object_or_404(Comment, pk=pk)
    if request.method == 'PUT':
        serializer = CommentSerializer(comment, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'GET':
        serializer = CommentSerializer(comment)
        
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'PUT', 'POST'])
@permission_classes([IsAuthenticated])
def user_comments(request, video_id):

    video_id = Comment.objects.filter(video_id)
    if request.method == 'GET':
        serializer = CommentSerializer(video_id)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CommentSerializer(video_id, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
