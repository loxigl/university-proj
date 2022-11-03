from django.http import HttpResponse
from django.shortcuts import render
from django.views import View


def index(request):
    return render(request, 'html/index.html')


def resume(request):
    return render(request, 'html/resume.html')


def branching(request):
    return render(request, 'html/branching.html')


def methods(request):
    return render(request, 'html/methods.html')


def feedback(request):
    return render(request, 'html/feedback.html')


def card(request):
    return render(request, 'html/card.html')


def dev_site(request):
    return render(request,'html/dev_site.html')