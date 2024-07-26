from django.db import models


class Recipe(models.Model):
    title = models.CharField(max_length=124)
    description = models.TextField()
    ingredients = models.TextField()
    category = models.ForeignKey('Category', on_delete=models.CASCADE, related_name='recipes')

    def __str__(self):
        return f'{self.title}'


class Category(models.Model):
    name = models.CharField(max_length=124)

    def __str__(self):
        return f'{self.name}'


