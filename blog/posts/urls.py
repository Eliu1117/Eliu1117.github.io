from django.urls import path

from . import views

# URL pattern -> view. Django tries these top to bottom for each request.
urlpatterns = [
    path("posts/", views.PostListCreate.as_view()),           # /api/posts/
    path("posts/<int:pk>/", views.PostDetail.as_view()),      # /api/posts/3/
]
