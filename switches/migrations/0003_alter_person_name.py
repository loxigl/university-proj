# Generated by Django 4.1.2 on 2022-11-28 05:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('switches', '0002_alter_person_maritalstatus'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='name',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
