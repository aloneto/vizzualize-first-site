"use client";

import { useState, useEffect, useCallback } from "react";

const CONSENT_KEY = "esi_cookie_consent";

type ConsentValue = "granted" | "denied";

/* eslint-disable @typescript-eslint/no-explicit-any */
function gtag(..._args: any[]) {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

function updateGoogleConsent(analytics: ConsentValue, ads: ConsentValue) {
  gtag("consent", "update", {
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
    analytics_storage: analytics,
  });
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) {
      const { analytics, ads } = JSON.parse(stored) as {
        analytics: ConsentValue;
        ads: ConsentValue;
      };
      updateGoogleConsent(analytics, ads);
    } else {
      setVisible(true);
    }
  }, []);

  const accept = useCallback(() => {
    const consent = { analytics: "granted" as const, ads: "granted" as const };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    updateGoogleConsent(consent.analytics, consent.ads);
    setVisible(false);
    window.dataLayer?.push({ event: "cookie_consent_granted" });
  }, []);

  const deny = useCallback(() => {
    const consent = { analytics: "denied" as const, ads: "denied" as const };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    updateGoogleConsent(consent.analytics, consent.ads);
    setVisible(false);
    window.dataLayer?.push({ event: "cookie_consent_denied" });
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-[var(--color-ink)] border-t border-[var(--color-gray-800)] p-4 sm:p-6 shadow-2xl"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-[var(--color-gray-300)] flex-1 leading-relaxed">
          Usamos cookies para análise de tráfego e personalização de anúncios.
          Ao aceitar, você concorda com nossa{" "}
          <span className="underline text-[var(--color-tech)]">
            Política de Privacidade
          </span>
          , conforme a LGPD (Lei 13.709/2018).
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={deny}
            className="px-4 py-2 text-sm rounded-lg border border-[var(--color-gray-700)] text-[var(--color-gray-300)] hover:bg-[var(--color-gray-800)] transition-colors cursor-pointer"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm rounded-lg bg-[var(--color-tech)] text-[var(--color-ink)] font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  );
}
