from django.shortcuts import render
from django.views import View


class MainView(View):
    template_name = "index/main.html"

    http_method_names = ['get']

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, {})

class MapView(View):
    template_name = "map/map.html"

    http_method_names = ['get']

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, {})
