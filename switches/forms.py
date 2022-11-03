from django import forms
from .models import Person


class Form(forms.ModelForm):
    name = forms.CharField(max_length=100, label='Имя')
    age = forms.IntegerField(max_value=120, label='Возраст')
    CHOISES = (('замужем/женат', 'замужем/женат'), ('не замужем/не женат', 'не замужем/не женат'))
    maritalstatus = forms.ChoiceField(choices=CHOISES, label='Семейное положение')

    class Meta:
        model = Person
        fields = ['name', 'age', 'maritalstatus']
