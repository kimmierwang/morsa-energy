"use client";

import { useEffect } from "react";

export default function ClientErrorHandlers() {
  useEffect(() => {
    const onError = (ev: ErrorEvent) => {
      try {
        const filename = ev.filename || "";
        const msg = ev.message || "";
        // Suppress FullStory network/fetch errors injected by preview environments
        if (filename.includes("fullstory") || filename.includes("edge.fullstory.com") || msg.includes("Failed to fetch")) {
          ev.preventDefault();
          return true;
        }
      } catch (e) {
        // swallow
      }
      return undefined;
    };

    const onRejection = (ev: PromiseRejectionEvent) => {
      try {
        const reason = ev.reason;
        if (!reason) return;
        const text = typeof reason === "string" ? reason : reason.message || "";
        if (text.includes("Failed to fetch") || text.includes("fullstory")) {
          ev.preventDefault();
          return true;
        }
      } catch (e) {
        // swallow
      }
      return undefined;
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);

    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
