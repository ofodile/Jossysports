'use client';

import React, { useEffect } from "react";

const Adbanner4 = () => {
  useEffect(() => {
    // Ensure atAsyncOptions is initialized
    if (typeof window.atAsyncOptions !== "object") {
      window.atAsyncOptions = [];
    }

    // Add ad config
    window.atAsyncOptions.push({
      key: "48a318b808b0630b3b38e010d2fad70a",
      format: "js",
      async: true,
      container: "atContainer-48a318b808b0630b3b38e010d2fad70a",
      params: {}
    });

    // Inject script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "http" +
      (location.protocol === "https:" ? "s" : "") +
      "://stoolsymphony.com/48a318b808b0630b3b38e010d2fad70a/invoke.js";

    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const container = document.getElementById(
        "atContainer-48a318b808b0630b3b38e010d2fad70a"
      );
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div id="atContainer-48a318b808b0630b3b38e010d2fad70a" />;
};

export default Adbanner4;
