// The whole frontend: plain JavaScript, no framework.
//
// The big idea: this code never touches the database. It only sends HTTP
// requests (fetch) to the Django API and draws whatever JSON comes back.
//
//   browser JS --(HTTP request, JSON)--> Django API --(SQL)--> SQLite
//   browser JS <-(HTTP response, JSON)-- Django API <-(rows)-- SQLite

const API = "/api/posts/";           // base URL of the REST API
const app = document.getElementById("app");

// Small helper so we never insert user text as HTML (avoids XSS).
function el(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}

// ---------- Home screen: list posts + create form ----------

async function showHome() {
  app.replaceChildren(el("p", "Loading..."));

  // REQUEST:  GET /api/posts/
  // RESPONSE: 200 OK, body = JSON array like [{"id":1,"title":"...",...}, ...]
  const response = await fetch(API);
  const posts = await response.json();   // parse JSON text into JS objects

  app.replaceChildren(buildForm(), el("h2", "All posts"));
  if (posts.length === 0) app.append(el("p", "No posts yet. Write the first one!"));

  for (const post of posts) {
    const card = el("div", undefined, "card");
    const link = el("a", post.title);
    link.href = "#/post/" + post.id;     // click-through to the single post view
    card.append(link, el("p", new Date(post.created_at).toLocaleString(), "meta"));
    app.append(card);
  }
}

function buildForm() {
  const form = document.createElement("form");
  const title = document.createElement("input");
  title.placeholder = "Title";
  title.maxLength = 200;
  const body = document.createElement("textarea");
  body.placeholder = "Write your post...";
  body.rows = 5;
  const button = el("button", "Publish");
  const error = el("p", "", "error");
  form.append(el("h2", "New post"), title, body, button, error);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();              // stop the browser's default page reload

    // REQUEST:  POST /api/posts/
    //           header Content-Type: application/json
    //           body   {"title": "...", "body": "..."}
    const response = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title.value, body: body.value }),
    });

    if (response.status === 201) {       // 201 Created: success
      showHome();                        // reload the list to show the new post
    } else {                             // 400 Bad Request: validation errors
      const problems = await response.json();  // e.g. {"title":["This field may not be blank."]}
      error.textContent = Object.entries(problems)
        .map(([field, msgs]) => field + ": " + msgs.join(" "))
        .join("  ");
    }
  });
  return form;
}

// ---------- Single post screen ----------

async function showPost(id) {
  // REQUEST:  GET /api/posts/<id>/
  // RESPONSE: 200 OK with one post as JSON, or 404 Not Found
  const response = await fetch(API + id + "/");
  const back = el("a", "\u2190 Back to all posts");
  back.href = "#/";

  if (response.status === 404) {
    app.replaceChildren(back, el("h2", "Post not found"));
    return;
  }
  const post = await response.json();
  app.replaceChildren(
    back,
    el("h2", post.title),
    el("p", new Date(post.created_at).toLocaleString(), "meta"),
    el("p", post.body, "post-body")
  );
}

// ---------- Tiny router: the part after # in the URL picks the screen ----------
// "#/" -> home, "#/post/3" -> post 3. Changing the hash doesn't reload the page.

function route() {
  const match = location.hash.match(/^#\/post\/(\d+)$/);
  if (match) showPost(match[1]);
  else showHome();
}

window.addEventListener("hashchange", route);
route();   // run once on page load
