from django.db import models


# Create your models here.
from django.urls import reverse


class Flat(models.Model):
    title = models.CharField(max_length=200)
    link = models.CharField(max_length=200)
    done = models.BooleanField
    date = models.DateTimeField
    price = models.IntegerField(max_length=6)
    flat_owner = models.CharField(max_length=100)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('flat-detail',args=[str(self.id)])