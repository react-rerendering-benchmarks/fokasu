import type { AppProps } from "next/app";
import "./../global.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({
  Component,
  pageProps
}: AppProps) {
  console.log(window.globalCount++);
  return <Component {...pageProps} />;
}