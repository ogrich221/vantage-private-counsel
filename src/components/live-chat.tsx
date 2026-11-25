import { useEffect } from "react";

declare global {
  interface Window {
    Tawk_API?: {
      maximize?: () => void;
      minimize?: () => void;
      toggle?: () => void;
      popup?: () => void;
      showWidget?: () => void;
      hideWidget?: () => void;
      getStatus?: () => string;
      onLoad?: () => void;
      [key: string]: unknown;
    };
    Tawk_LoadStart?: Date;
  }
}

export function openLiveChat() {
  if (typeof window === "undefined") return;
  if (window.Tawk_API?.maximize) {
    window.Tawk_API.maximize();
  } else if (window.Tawk_API?.toggle) {
    window.Tawk_API.toggle();
  }
}

export function LiveChat() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("tawk-to-script")) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.id = "tawk-to-script";
    s1.async = true;
    s1.src = "https://embed.tawk.to/6b06d26a7a11e467e28eb118/1k89abs6g";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    const s0 = document.getElementsByTagName("script")[0];
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }
  }, []);

  return null;
}
