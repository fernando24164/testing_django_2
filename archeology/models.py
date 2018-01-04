from django.db import models


class Place(models.Model):
    name = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()
    description = models.TextField(default="")

    def __str__(self):
        return "{}: Latitude: {}, Longitude: {}".format(self.name, self.latitude, self.longitude)
