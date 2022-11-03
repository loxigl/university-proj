from django.shortcuts import render, redirect

# Create your views here.
from django.views import View
from .forms import Form
from .models import Person


class Switches(View):
    template = 'switches.html'
    form = Form


    def get(self, request, *args, **kwargs):
        if Person.objects.all():
            contexts = {'persons': Person.objects.all()}
        else:
            contexts = {}
        context = contexts
        context.update({'form': self.form})
        print(context)
        return render(request, self.template, context)

    def post(self, request, *args, **kwargs):
        form = self.form(request.POST)
        if form.is_valid():
            guy = form.save()
            if Person.objects.all():
                contexts = {'persons': Person.objects.all()}
            else:
                contexts = {}
            context = contexts
            context.update({'form': self.form})
            return render(request, self.template, context)
        else:
            if Person.objects.all():
                contexts = {'persons': Person.objects.all()}
            else:
                contexts = {}
            context = contexts
            context.update({'form': form})
            return render(request, self.template, context)


def showcard(request):
    _id = request.GET.get('id')
    instance = Person.objects.get(id=_id)
    return render(request, 'html/showcard.html', {'person': instance})


def delete(request):
    _id = request.GET.get('id')
    Person.objects.get(id=_id).delete()
    return redirect('switches')
