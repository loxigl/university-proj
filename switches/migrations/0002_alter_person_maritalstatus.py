# Generated by Django 4.1.2 on 2022-11-02 23:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('switches', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='maritalstatus',
            field=models.CharField(max_length=30),
        ),
    ]
