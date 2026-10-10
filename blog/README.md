# Simple Blog: Django REST API + plain JavaScript

A tiny blog for learning how a REST API works and how the pieces fit together.
Backend: Django + Django REST Framework + SQLite. Frontend: plain JS, no framework.

> This lives in the `blog/` folder. (The repo root contains an unrelated Next.js app.)

## Setup and run

Requires Python 3.10+.

```bash
cd blog
python3 -m venv .venv && source .venv/bin/activate   # optional but recommended
pip install -r requirements.txt
python manage.py migrate        # creates the SQLite database (db.sqlite3)
python manage.py runserver      # starts http://127.0.0.1:8000/
```

Open <http://127.0.0.1:8000/> for the site. The API is at <http://127.0.0.1:8000/api/posts/>.
Run the tests with `python manage.py test`.

## How the parts fit together

```
 ┌──────────────────────┐   1. HTTP request (JSON)     ┌─────────────────────────┐   3. SQL    ┌──────────────┐
 │  Browser             │ ───────────────────────────▶ │  Django                 │ ──────────▶ │  SQLite      │
 │  frontend/app.js     │   GET/POST /api/posts/       │  config/urls.py   route │             │  db.sqlite3  │
 │  (fetch + DOM)       │                              │  posts/views.py   logic │ ◀────────── │  posts_post  │
 │                      │ ◀─────────────────────────── │  posts/serializers.py   │   4. rows   │  table       │
 └──────────────────────┘   2. HTTP response (JSON)    │  posts/models.py  data  │             └──────────────┘
                              status code + body       └─────────────────────────┘
```

Following one "create post" click:

1. You press **Publish**. `frontend/app.js` calls `fetch("/api/posts/", {method: "POST", body: JSON})`.
2. Django's `config/urls.py` sees `/api/`, hands off to `posts/urls.py`, which maps `posts/` to `PostListCreate`.
3. The view uses `PostSerializer` to validate the JSON (title/body present? title <= 200 chars?).
4. If valid, the model (`Post`) saves a row into SQLite. Django writes the SQL for you.
5. The serializer turns the saved row back into JSON; Django replies `201 Created`.
6. `app.js` sees status `201`, re-fetches the list (`GET /api/posts/`) and redraws the page.

If the data is invalid, step 3 stops and Django replies `400 Bad Request` with error messages
that `app.js` shows under the form.

### Files to read (in this order)

| File | Role |
| --- | --- |
| `posts/models.py` | The database table (title, body, created_at) |
| `posts/serializers.py` | Python object <-> JSON, plus validation |
| `posts/views.py` | What happens for each request (list/create/retrieve) |
| `posts/urls.py`, `config/urls.py` | Which URL goes to which view |
| `frontend/index.html`, `frontend/app.js` | The page and the JS that calls the API |

## REST concepts, mapped to this app

**Resource.** REST models your data as "things" (resources). Here the resource is a *post*.

**Endpoint.** A URL where the API is reachable. Defined in `posts/urls.py`:

| Endpoint | Meaning |
| --- | --- |
| `/api/posts/` | the collection of all posts |
| `/api/posts/3/` | the single post with `id` 3 |

**HTTP methods** say *what to do* with the resource. The same URL can do different things:

| Method | URL | Action | Code |
| --- | --- | --- | --- |
| `GET` | `/api/posts/` | list posts | `PostListCreate` |
| `POST` | `/api/posts/` | create a post | `PostListCreate` |
| `GET` | `/api/posts/<id>/` | read one post | `PostDetail` |

(Real-world APIs usually also have `PUT`/`PATCH` to update and `DELETE` to remove. We left them out to stay minimal; swap `RetrieveAPIView` for `RetrieveUpdateDestroyAPIView` in `views.py` to get them.)

**Status codes** tell the client how it went:

| Code | Meaning | Where in this app |
| --- | --- | --- |
| `200 OK` | success | `GET` list / retrieve |
| `201 Created` | new thing was created | successful `POST`; `app.js` checks for this |
| `400 Bad Request` | your data was invalid | `POST` with empty title/body; shown under the form |
| `404 Not Found` | no such resource | `GET /api/posts/999/`; `app.js` shows "Post not found" |

**JSON** is the text format used for request and response bodies:

```json
{"id": 1, "title": "Hello, REST", "body": "My first post", "created_at": "2026-10-10T21:06:59Z"}
```

The client sends `Content-Type: application/json` to say "my body is JSON". `id` and `created_at` are
set by the server (`read_only_fields` in the serializer), so clients can't forge them.

**Stateless.** Each request carries everything the server needs; the server doesn't remember
earlier requests. That's why `app.js` simply re-fetches the list after creating a post.

## Try the API with curl

Start the server first. `-i` shows the status line and headers; `-X` sets the method.

```bash
# List posts (GET) -> 200 OK, JSON array
curl -i http://127.0.0.1:8000/api/posts/

# Create a post (POST) -> 201 Created
curl -i -X POST http://127.0.0.1:8000/api/posts/ \
  -H "Content-Type: application/json" \
  -d '{"title": "Hello, REST", "body": "My first post, created with curl."}'

# Retrieve one post -> 200 OK
curl -i http://127.0.0.1:8000/api/posts/1/

# A post that doesn't exist -> 404 Not Found
curl -i http://127.0.0.1:8000/api/posts/999/

# Invalid data (missing fields) -> 400 Bad Request with error details
curl -i -X POST http://127.0.0.1:8000/api/posts/ \
  -H "Content-Type: application/json" -d '{}'
# {"title":["This field is required."],"body":["This field is required."]}
```

Tip: with `runserver` running, visiting <http://127.0.0.1:8000/api/posts/> in a browser shows DRF's
built-in "browsable API", which is a nice way to poke at it. Also open your browser's DevTools
**Network** tab while using the site to watch the real requests `app.js` makes.

## Ideas to extend

- Add `DELETE` / `PUT` (see the note above).
- Add an `author` field: edit `models.py`, run `python manage.py makemigrations && python manage.py migrate`.
- Add authentication so only logged-in users can `POST`.

## Notes

This is a learning project: `DEBUG = True`, and no auth or pagination. Don't deploy as-is.
