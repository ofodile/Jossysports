"use client";
import { useEffect, useRef } from "react";

const AdBanner1 = () => {
  const adContainerRef = useRef(null);

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key': 'ba9651d200fcbec994d5080e02b8a31a',
        'format': 'iframe',
        'height': 90,
        'width': 728,
        'params': {}
      };
    `;

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "//stoolsymphony.com/ba9651d200fcbec994d5080e02b8a31a/invoke.js";

    if (adContainerRef.current) {
      adContainerRef.current.appendChild(script1);
      adContainerRef.current.appendChild(script2);
    }
  }, []);

  return <div ref={adContainerRef}></div>;
};

export default AdBanner1;
