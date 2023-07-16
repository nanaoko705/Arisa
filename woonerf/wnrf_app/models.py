from django.db import models

#여기서부터 진행중
# from django.contrib.auth.models import User
# from django.db.models.signals.import post_save
# from django.dispatch import receiver
from wnrf_app.models import User

# Create your models here.
class Board(models.Model):
    # 글의 제목, 내용, 작성일, 마지막 수정일
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="boards")
    title = models.CharField("제목", max_length=50, null=False)
    content = models.TextField("내용", null=False)
    dt_created = models.DateTimeField("작성일", auto_now_add=True, null=False)
    dt_modified = models.DateTimeField("수정일", auto_now=True, null=False)

    def __str__(self):
        return self.title

class Comment(models.Model):
     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name= 'comment' )

#여기서부터 진행중
# class Profile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     user_pk = models.IntegerField(blank=True)
#     email = models.EmailField(max_length=500, blank=True)
#     nickname = models.CharField(max_length=200, blank=True)
#     point = models.IntegerField(default=0)
#     like = models.CharField(max_length=200, blank=True)
#     phone = models.CharField(max_length=200, blank=True)


# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance, user_pk=instance.id)


# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     instance.profile.save()