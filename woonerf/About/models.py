from django.db import models
from django.conf import settings
from account.models import User

class About(models.Model):
    # 1. 게시글의 id 값
    id = models.AutoField(primary_key=True, null=False, blank=False) 
    # 2. 작성자
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    # 3. 본문
    body = models.TextField()
    # 4. 이미지
    image = models.ImageField(upload_to="%Y/%m/%d", blank=True, null=True)