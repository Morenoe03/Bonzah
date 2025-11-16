"use client";

import React, { useState } from "react";
import Header from "../../components/globals/header";
import Footer from "../../components/globals/footer";

// Simple client-only secret login.
// Notes:
// - Allowed email: admin@example.com
// - Allowed password (base64 obfuscated): U2VjcmV0MTIzIQ==  (decodes to 'Secret123!')
// This is intentionally simple: password is obfuscated with base64 and checked in the browser.

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // rate-limiting/lockout stored in sessionStorage so it survives reloads per session
  const attemptsKey = "secretAdminAttempts";
  const lockoutKey = "secretAdminLockoutUntil";

  function getAttempts() {
    const v = sessionStorage.getItem(attemptsKey);
    return v ? parseInt(v, 10) || 0 : 0;
  }
  function setAttempts(n: number) {
    sessionStorage.setItem(attemptsKey, String(n));
  }

  function isLockedOut() {
    const until = sessionStorage.getItem(lockoutKey);
    if (!until) return false;
    const t = parseInt(until, 10);
    return Date.now() < t;
  }

  function setLockout(seconds: number) {
    const until = Date.now() + seconds * 1000;
    sessionStorage.setItem(lockoutKey, String(until));
  }

  function decodeBase64(s: string) {
    try {
      return atob(s);
    } catch (e) {
      return "";
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (isLockedOut()) {
      setError("Too many failed attempts. Try again later.");
      return;
    }
    setLoading(true);

    // basic input validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email.");
      setLoading(false);
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      setLoading(false);
      return;
    }

    // allowed credentials (obfuscated)
    const allowedEmail = "admin@example.com";
    const allowedPasswordB64 = "U2VjcmV0MTIzIQ=="; // 'Secret123!'

    // constant-time-ish comparison
    function safeEq(a: string, b: string) {
      if (a.length !== b.length) return false;
      let res = 0;
      for (let i = 0; i < a.length; i++) res |= a.charCodeAt(i) ^ b.charCodeAt(i);
      return res === 0;
    }

    // check
    const decoded = decodeBase64(allowedPasswordB64);
    const emailOk = safeEq(email, allowedEmail);
    const passOk = safeEq(password, decoded);

    if (emailOk && passOk) {
      // successful login: create a short-lived token in sessionStorage
      const token = Math.random().toString(36).slice(2) + Date.now().toString(36);
      sessionStorage.setItem("secretAdminAuth", token);
      // reset attempts
      setAttempts(0);
      sessionStorage.removeItem(lockoutKey);
      // redirect to admin page
      window.location.href = "/blogs/blog-creation";
    } else {
      // failed
      const attempts = getAttempts() + 1;
      setAttempts(attempts);
      if (attempts >= 5) {
        // lockout for 30 seconds
        setLockout(30);
        setError("Too many failed attempts — locked for 30 seconds.");
      } else {
        setError(`Credentials incorrect. (${attempts}/5)`);
      }
      setLoading(false);
    }
  }

  return (
    <div className="backgroundLighter min-h-screen">
      <Header />
      <main className="section">
        <div className="max-w-2xl mx-auto card">
          <h2 className="h2">Login to Blog Creation</h2>
          <p className="muted">This page is intentionally unlisted. Keep the URL private.</p>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border px-3 py-2"
                required
              />
            </div>
            {error && <div className="text-sm text-red-600">{error}</div>}
            <div className="flex items-center gap-4">
              <button type="submit" className="btn-primary" disabled={loading || isLockedOut()}>
                {loading ? "Signing in…" : "Sign in"}
              </button>
              <div className="muted text-sm">Allowed user example: <code>example@example.com</code></div>
            </div>
          </form>
          </div>
      </main>
      <Footer />
    </div>
  );
}
