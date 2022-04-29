from telnetlib import AUTHENTICATION
from django.db import models
from authentication.models import User

# Create your models here.
class Reply(models.Model):
    user = models.ForeignKey(User, related_name='user_reply_set', on_delete=models.CASCADE)
    comment = models.ForeignKey(User, related_name='comment_reply_set', on_delete=models.CASCADE)
    text = models.CharField(max_length=200)

