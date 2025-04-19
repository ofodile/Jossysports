'use client';

import React, { useEffect } from "react";

const Adbanner3 = () => {
  useEffect(() => {
    // Initialize atAsyncOptions if not already
    if (typeof window.atAsyncOptions !== "object") {
      window.atAsyncOptions = [];
    }

    // Push the ad config
    window.atAsyncOptions.push({
      key: "2508f1d4fd8d5a6aef19dd80c87cff94",
      format: "js",
      async: true,
      container: "atContainer-2508f1d4fd8d5a6aef19dd80c87cff94",
      params: {}
    });

    // Create and inject script tag
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "http" +
      (location.protocol === "https:" ? "s" : "") +
      "://stoolsymphony.com/2508f1d4fd8d5a6aef19dd80c87cff94/invoke.js";

    document.head.appendChild(script);

    // Cleanup: remove the ad content when component unmounts
    return () => {
      const container = document.getElementById(
        "atContainer-2508f1d4fd8d5a6aef19dd80c87cff94"
      );
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div id="atContainer-2508f1d4fd8d5a6aef19dd80c87cff94" />;
};

export default Adbanner3;
