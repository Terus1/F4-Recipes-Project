# Generated by Django 4.2.14 on 2024-07-26 14:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='ingredients',
            field=models.TextField(default='empty'),
            preserve_default=False,
        ),
    ]
