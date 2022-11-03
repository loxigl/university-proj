from django.db import models

# Create your models here.
from django.urls import reverse


class Person(models.Model):
    name = models.CharField(max_length=100, unique=True)
    age = models.IntegerField()
    maritalstatus = models.CharField(max_length=30)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('showcard', kwargs={'_id': self.id})
