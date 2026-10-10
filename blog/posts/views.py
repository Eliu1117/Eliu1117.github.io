from rest_framework import generics

from .models import Post
from .serializers import PostSerializer


class PostListCreate(generics.ListCreateAPIView):
    """
    GET  /api/posts/  -> 200 OK, JSON list of all posts
    POST /api/posts/  -> 201 Created, JSON of the new post
                         (400 Bad Request with error details if data is invalid)

    Flow for a POST: request JSON -> serializer validates -> row saved in
    SQLite -> serializer turns the saved row back into JSON -> response.
    """

    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveAPIView):
    """
    GET /api/posts/<id>/ -> 200 OK, JSON of that post
                            (404 Not Found if no post has that id)
    """

    queryset = Post.objects.all()
    serializer_class = PostSerializer
