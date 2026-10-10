from rest_framework.test import APITestCase

from .models import Post


class PostApiTests(APITestCase):
    def test_create_list_retrieve(self):
        r = self.client.post("/api/posts/", {"title": "Hi", "body": "There"}, format="json")
        self.assertEqual(r.status_code, 201)
        pid = r.json()["id"]
        self.assertEqual(len(self.client.get("/api/posts/").json()), 1)
        r = self.client.get(f"/api/posts/{pid}/")
        self.assertEqual(r.status_code, 200)
        self.assertEqual(r.json()["title"], "Hi")

    def test_validation_and_404(self):
        self.assertEqual(self.client.post("/api/posts/", {"title": ""}, format="json").status_code, 400)
        self.assertEqual(self.client.get("/api/posts/999/").status_code, 404)
        self.assertEqual(Post.objects.count(), 0)
