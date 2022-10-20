from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('resume/', views.resume, name='resume'),
    path('branching/', views.branching, name='branching'),
    path('methods/', views.methods, name='methods'),
    path('feedback', views.feedback, name='feedback'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
