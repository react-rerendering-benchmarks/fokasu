import type { AppProps } from "next/app";
import "./../global.css";
import { useEffect } from "react";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (window) {
      if (window.globalCount === undefined) {
        window.globalCount = window.globalCount || 0;
      }
      console.log(window.globalCount++);
    }
  }, []);
  return <Component {...pageProps} />;
}
