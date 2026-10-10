from django.db import models


class Post(models.Model):
    """One row in the `posts_post` database table. Each field is a column."""

    title = models.CharField(max_length=200)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)  # set automatically

    class Meta:
        ordering = ["-created_at"]  # newest first

    def __str__(self):
        return self.title
