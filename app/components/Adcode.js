'use client';

import { useEffect } from 'react';

export default function Adcode() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://example.com/ad.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return <div id="ad-container" />;
}
