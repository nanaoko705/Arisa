# Generated by Django 4.2.3 on 2023-07-24 21:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('board', '0002_blog_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='image',
            field=models.ImageField(blank=True, upload_to='%Y/%m/%d'),
        ),
    ]
