'use client';

import React, { useEffect } from "react";

const Adbanner6 = () => {
  useEffect(() => {
    if (typeof window.atAsyncOptions !== "object") {
      window.atAsyncOptions = [];
    }

    window.atAsyncOptions.push({
      key: "552707887b2f4aa13417ec22183c674b",
      format: "js",
      async: true,
      container: "atContainer-552707887b2f4aa13417ec22183c674b",
      params: {}
    });

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "http" +
      (location.protocol === "https:" ? "s" : "") +
      "://stoolsymphony.com/552707887b2f4aa13417ec22183c674b/invoke.js";
    document.head.appendChild(script);

    return () => {
      const container = document.getElementById(
        "atContainer-552707887b2f4aa13417ec22183c674b"
      );
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div id="atContainer-552707887b2f4aa13417ec22183c674b" />;
};

export default Adbanner6;
