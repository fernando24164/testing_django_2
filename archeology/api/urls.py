from django.urls import path
from .views import PlacesAPI

urlpatterns = [
    path("places", PlacesAPI.as_view(), name="places"),
]