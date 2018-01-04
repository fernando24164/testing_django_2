from django.contrib import admin
from archeology.models import Place

class PlaceAdmin(admin.ModelAdmin):
    fields = ('name', 'latitude', 'longitude')
    list_display = ('name', 'latitude', 'longitude')
    list_filter = ('name',)
    search_fields = ('name',)

admin.site.register(Place, PlaceAdmin)