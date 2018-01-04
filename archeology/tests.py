from django.test import TestCase
from django.test import Client
from django.urls import reverse

class TestMainView(TestCase):

    def setUp(self):
        self.client = Client()

    def test_main_view_response(self):
        response = self.client.get(reverse('index'))
        self.assertEqual(response.status_code, 200)

    def test_map_view_response(self):
        response = self.client.get(reverse('map'))
        self.assertEqual(response.status_code, 200)

    def test_api_response(self):
        response = self.client.get(reverse('places'))
        self.assertEqual(response.status_code, 200)




