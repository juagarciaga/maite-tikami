"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, Suspense } from "react";

const GOOGLE_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;
const GOOGLE_ADS_ID = process.env.GOOGLE_ADS_ID;

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

function GoogleAdsScripts({ ga4Id }: { ga4Id?: string }) {
  const primaryId = ga4Id ?? GOOGLE_ADS_ID;

  return (
    <>
      <Script
        id="gtag-js"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
      />
      <Script
        id="gtag-inline"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            ${ga4Id ? `gtag('config', '${ga4Id}', { page_path: window.location.pathname });` : ""}
            gtag('config', '${GOOGLE_ADS_ID}');
          `,
        }}
      />
    </>
  );
}

export function GoogleAnalytics() {
  const type = GOOGLE_ID ? getGoogleIdType(GOOGLE_ID) : null;

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

  return (
    <>
      <GoogleAdsScripts ga4Id={type === "ga4" ? GOOGLE_ID : undefined} />
      {type === "ga4" && (
        <Suspense fallback={null}>
          <GoogleAnalyticsInner />
        </Suspense>
      )}
    </>
  );
}
