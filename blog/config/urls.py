"""Top-level URL routing: decides which code handles each request URL."""
from django.urls import include, path
from django.views.generic import TemplateView

urlpatterns = [
    # "/" -> the single HTML page (frontend/index.html). Its JS then calls the API.
    path("", TemplateView.as_view(template_name="index.html")),
    # "/api/..." -> the REST API defined in posts/urls.py
    path("api/", include("posts.urls")),
]
