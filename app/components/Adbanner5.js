'use client';

import React, { useEffect } from "react";

const Adbanner5 = () => {
  useEffect(() => {
    // Initialize atAsyncOptions if not already an object
    if (typeof window.atAsyncOptions !== "object") {
      window.atAsyncOptions = [];
    }

    // Add ad config to atAsyncOptions
    window.atAsyncOptions.push({
      key: "a89a38379d0414a927bad3f939c7ad80",
      format: "js",
      async: true,
      container: "atContainer-a89a38379d0414a927bad3f939c7ad80",
      params: {}
    });

    // Create and inject the ad script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "http" +
      (location.protocol === "https:" ? "s" : "") +
      "://stoolsymphony.com/a89a38379d0414a927bad3f939c7ad80/invoke.js";
    document.head.appendChild(script);

    // Clean up the container on unmount
    return () => {
      const container = document.getElementById(
        "atContainer-a89a38379d0414a927bad3f939c7ad80"
      );
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div id="atContainer-a89a38379d0414a927bad3f939c7ad80" />;
};

export default Adbanner5;
