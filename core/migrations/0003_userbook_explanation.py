# Generated by Django 2.2.1 on 2019-08-17 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20190816_1532'),
    ]

    operations = [
        migrations.AddField(
            model_name='userbook',
            name='explanation',
            field=models.TextField(max_length=512, null=True),
        ),
    ]
