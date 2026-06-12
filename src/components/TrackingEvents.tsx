"use client";

import { useEffect } from "react";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Window {
    dataLayer: any[];
  }
}

function pushEvent(event: string, params?: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export function TrackingEvents() {
  useEffect(() => {
    // --- WhatsApp click tracking ---
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest?.("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (href.includes("wa.me") || href.includes("whatsapp")) {
        pushEvent("whatsapp_click", { link_url: href });
      }
    }
    document.addEventListener("click", handleClick);

    // --- Contact form submit tracking ---
    function handleSubmit(e: Event) {
      const form = e.target as HTMLFormElement;
      if (form.closest?.("#contato") || form.querySelector?.("[name='setor']")) {
        pushEvent("contact_form_submit");
      }
    }
    document.addEventListener("submit", handleSubmit);

    // --- Scroll depth tracking (25%, 50%, 75%, 100%) ---
    const thresholds = [25, 50, 75, 100];
    const fired = new Set<number>();

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((scrollTop / docHeight) * 100);

      for (const t of thresholds) {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          pushEvent("scroll_depth", { scroll_percentage: t });
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
