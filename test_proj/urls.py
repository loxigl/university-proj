from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('resume/', views.resume, name='resume'),
    path('branching/', views.branching, name='branching'),
    path('methods/', views.methods, name='methods'),
    path('feedback/', views.feedback, name='feedback'),
    path('card/', views.card, name='card'),
    path('switches/', include('switches.urls')),
    path('dev/', views.dev_site, name='dev_site'),
    path('lottery/', views.lottery, name='lottery')

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
