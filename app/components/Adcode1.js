'use client';

import React, { useEffect } from "react";

const Adcode1 = () => {
  useEffect(() => {
    // Set the ad options globally
    window.atOptions = {
      key: "2508f1d4fd8d5a6aef19dd80c87cff94",
      format: "iframe",
      height: 250,
      width: 300,
      params: {}
    };

    // Inject the ad script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "//stoolsymphony.com/2508f1d4fd8d5a6aef19dd80c87cff94/invoke.js";

    document.body.appendChild(script);

    // Optional: cleanup if needed
    return () => {
      const iframes = document.querySelectorAll("iframe");
      iframes.forEach((iframe) => {
        if (
          iframe.src.includes("2508f1d4fd8d5a6aef19dd80c87cff94")
        ) {
          iframe.remove();
        }
      });
    };
  }, []);

  return <div style={{ width: 300, height: 250 }} />;
};

export default Adcode1;
