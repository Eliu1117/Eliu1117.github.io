from rest_framework import serializers

from .models import Post


class PostSerializer(serializers.ModelSerializer):
    """Translates between Post objects (Python/database) and JSON (the web).

    - Reading:  Post object  -> JSON   (responses)
    - Writing:  JSON         -> validated data -> Post object (POST requests)
    Validation (e.g. title required, max 200 chars) comes from the model fields.
    """

    class Meta:
        model = Post
        fields = ["id", "title", "body", "created_at"]
        read_only_fields = ["id", "created_at"]  # server sets these, clients can't
