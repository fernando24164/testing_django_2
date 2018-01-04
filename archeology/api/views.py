from rest_framework.generics import ListAPIView
from ..models import Place
from .serializers import PlaceSerializer

class PlacesAPI(ListAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer