from django.urls import path
from switches import views

urlpatterns = [
    path('', views.Switches.as_view(), name='switches'),
    path('showcard/', views.showcard, name='showcard'),
    path('delete/',views.delete,name='delete')
]
