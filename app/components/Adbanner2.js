"use client";
import { useEffect, useRef } from "react";

const AdBanner2 = () => {
  const adContainerRef = useRef(null);

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key': 'f75254ad5e888c672fc190356193ff97',
        'format': 'iframe',
        'height': 50,
        'width': 320,
        'params': {}
      };
    `;

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "//stoolsymphony.com/f75254ad5e888c672fc190356193ff97/invoke.js";

    if (adContainerRef.current) {
      adContainerRef.current.appendChild(script1);
      adContainerRef.current.appendChild(script2);
    }
  }, []);

  return <div ref={adContainerRef}></div>;
};

export default AdBanner2;
