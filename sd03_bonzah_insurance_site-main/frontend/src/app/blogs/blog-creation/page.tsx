"use client";

import React, { useEffect, useState } from "react";
import Header from "../../components/globals/header";
import Footer from "../../components/globals/footer";

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  author?: string;
  images?: string[];
};

export default function AdminPage() {
  const [authorized, setAuthorized] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("admin@example.com");
  const [imagesText, setImagesText] = useState("");
  const [publishLocal, setPublishLocal] = useState(() => new Date().toISOString().slice(0,16));
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const token = sessionStorage.getItem("secretAdminAuth");
    if (!token) {
      // Not authorized -> redirect to login
      window.location.href = "/blogs/login";
      return;
    }
    setAuthorized(true);
    const raw = localStorage.getItem("secretAdminPosts");
    if (raw) {
      try {
        setPosts(JSON.parse(raw));
      } catch (e) {
        setPosts([]);
      }
    }
  }, []);

  function savePosts(next: Post[]) {
    setPosts(next);
    localStorage.setItem("secretAdminPosts", JSON.stringify(next));
  }

  function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    // images entered as newline-separated URLs
    const images = imagesText
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean);

    // publishLocal is in format YYYY-MM-DDTHH:mm (datetime-local input)
    const publishDate = publishLocal ? new Date(publishLocal).toISOString() : new Date().toISOString();
    const lastEditDate = publishDate;

    const payload = {
      title: title.trim(),
      author: author.trim(),
      images,
      body: content.trim(),
      publishDate,
      lastEditDate,
    };

    // POST to backend
    fetch('http://localhost:3001/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(async (r) => {
        if (!r.ok) throw new Error('Failed to create post');
        const created = await r.json();
        // map backend response to local Post type
        const p: Post = {
          id: String(created.id),
          title: created.title,
          content: created.body,
          createdAt: created.publishDate,
          author: created.author,
          images: created.images,
        };
        savePosts([p, ...posts]);
        setTitle("");
        setContent("");
        setImagesText("");
        setPublishLocal(new Date().toISOString().slice(0,16));
      })
      .catch((err) => {
        console.error(err);
        alert('Failed to create post — see console');
      });
  }

  function handleDelete(id: string) {
    const next = posts.filter((p) => p.id !== id);
    savePosts(next);
  }

  function handleLogout() {
    sessionStorage.removeItem("secretAdminAuth");
    window.location.href = "/blogs/login";
  }

  if (!authorized) return null;

  return (
    <div className="backgroundLighter min-h-screen">
      <Header />
      <main className="section">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="h2">Create Blog Post</h2>
            <div>
              <button onClick={handleLogout} className="btn-primary">Logout</button>
            </div>
          </div>

          <div className="card mb-6">
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full rounded-md border px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Author</label>
                <input
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="mt-1 block w-full rounded-md border px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Images (one URL per line)</label>
                <textarea
                  value={imagesText}
                  onChange={(e) => setImagesText(e.target.value)}
                  placeholder="https://...\nhttps://..."
                  className="mt-1 block w-full rounded-md border px-3 py-2 min-h-[80px]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Publish date</label>
                <input
                  type="datetime-local"
                  value={publishLocal}
                  onChange={(e) => setPublishLocal(e.target.value)}
                  className="mt-1 block w-full rounded-md border px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Content</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="mt-1 block w-full rounded-md border px-3 py-2 min-h-[150px]"
                />
              </div>
              <div className="flex items-center gap-4">
                <button type="submit" className="btn-primary">Create post</button>
                {/* Posts are stored locally in your browser (localStorage). */}
                <div className="muted text-sm"></div>
              </div>
            </form>
          </div>

          <div>
            <h3 className="h2">Existing posts</h3>
            {posts.length === 0 ? (
              <div className="card muted">No posts yet.</div>
            ) : (
              <div className="space-y-4">
                {posts.map((p) => (
                  <div key={p.id} className="card">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-lg">{p.title}</h4>
                        <div className="muted text-sm">{new Date(p.createdAt).toLocaleString()}</div>
                      </div>
                      <div>
                        <button onClick={() => handleDelete(p.id)} className="text-sm text-red-600">Delete</button>
                      </div>
                    </div>
                    <div className="mt-3 text-sm">{p.content}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
