"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, Suspense } from "react";

const GOOGLE_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: string, targetId?: string, params?: Record<string, unknown>) => void;
  }
}

function getGoogleIdType(id: string) {
  if (id.startsWith("GTM-")) return "gtm";
  if (id.startsWith("G-")) return "ga4";
  return "unknown";
}

function GoogleAnalyticsInner() {
  const pathname = usePathname();
  const type = GOOGLE_ID ? getGoogleIdType(GOOGLE_ID) : "unknown";

  useEffect(() => {
    if (!GOOGLE_ID) return;

    if (type === "ga4") {
      if (typeof window.gtag !== "function") return;
      window.gtag("config", GOOGLE_ID, { page_path: pathname });
      return;
    }

    if (type === "gtm") {
      // SPA-friendly pageview pushes.
      if (!Array.isArray(window.dataLayer)) return;
      window.dataLayer.push({
        event: "pageview",
        page_path: pathname,
        page_location: window.location.href,
      });
    }
  }, [pathname, type]);

  return null;
}

export function GoogleAnalytics() {
  if (!GOOGLE_ID) return null;

  const type = getGoogleIdType(GOOGLE_ID);

  if (type === "gtm") {
    return (
      <>
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GOOGLE_ID}');
            `,
          }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="gtm"
          />
        </noscript>
        <Suspense fallback={null}>
          <GoogleAnalyticsInner />
        </Suspense>
      </>
    );
  }

  // Default to GA4 for IDs like "G-XXXXXXXXXX"
  if (type === "ga4") {
    return (
      <>
        <Script
          id="ga4-gtag"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ID}`}
        />
        <Script
          id="ga4-inline"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ID}', { page_path: window.location.pathname });
            `,
          }}
        />
        <Suspense fallback={null}>
          <GoogleAnalyticsInner />
        </Suspense>
      </>
    );
  }

  // Unknown ID prefix; do not inject.
  return null;
}

