"use client";
// comment for adding
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const linkBase =
    "transition-colors text-[var(--color-black)] hover:text-[var(--color-pink)]";

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-white)] shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" aria-label="Bonzah Home" className="flex items-center">
          <Image
            src="/partners/bonzah-white-logo.svg"
            alt="Bonzah"
            width={600}       
            height={120}
            priority
            className="w-[clamp(180px,32vw,240px)] h-auto"
            sizes="(max-width: 640px) 180px, (max-width: 1024px) 32vw, 420px"
          />
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-3 sm:gap-4 flex-wrap justify-end">
          <Link href="/#embeddedQuoter" className={linkBase}>
            Client Portal
          </Link>

          {/* About dropdown */}
          <div ref={menuRef} className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={open}
              className="btn-primary rounded-xl px-4 py-2"
              style={{ background: "var(--color-pink)" }}
            >
              About
            </button>

            {open && (
              <div
                className="absolute right-0 mt-2 w-48 rounded-xl border bg-[var(--color-white)] shadow-lg p-2"
                role="menu"
              >
                <Link
                  href="/#faq"
                  className="block rounded-lg px-3 py-2 text-[var(--color-black)] hover:bg-[var(--color-light-pink)]"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="/components/about"
                  className="block rounded-lg px-3 py-2 text-[var(--color-black)] hover:bg-[var(--color-light-pink)]"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/#contact"
                  className="block rounded-lg px-3 py-2 text-[var(--color-black)] hover:bg-[var(--color-light-pink)]"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
