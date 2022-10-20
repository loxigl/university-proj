from django.http import HttpResponse
from django.shortcuts import render

from test_proj.models import Flat


def index(request):
    num_flat = Flat.objects.all().count()
    return render(request, 'html/index.html', context={'num_flat': num_flat})


def resume(request):
    return render(request, 'html/resume.html')


def branching(request):
    return render(request, 'html/branching.html')
