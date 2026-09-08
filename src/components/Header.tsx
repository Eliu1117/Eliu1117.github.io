"use client";

import { useEffect, useId, useState } from "react";
import { navItems } from "@/data/nav";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/Container";
import { CloseIcon, MenuIcon } from "@/components/icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors motion-reduce:transition-none",
        scrolled
          ? "border-zinc-200/80 bg-zinc-50/90 backdrop-blur-md"
          : "border-transparent bg-zinc-50/80 backdrop-blur-sm",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="group flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-teal-800 text-[11px] font-semibold tracking-wide text-white">
            {site.initials}
          </span>
          <span className="text-sm font-semibold tracking-tight text-zinc-900">
            {site.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "location" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800",
                    active === item.id
                      ? "text-teal-800"
                      : "text-zinc-600 hover:text-zinc-900",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-700 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </Container>

      {open ? (
        <nav
          id={menuId}
          aria-label="Mobile"
          className="fixed inset-x-0 top-16 z-50 border-b border-zinc-200 bg-white shadow-sm"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "location" : undefined}
                  className={cn(
                    "block rounded-md px-3 py-3 text-base font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800",
                    active === item.id ? "text-teal-800" : "text-zinc-800",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
