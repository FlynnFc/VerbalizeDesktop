import type { AppProps } from "next/app";

import "../style.css";
import "../App.css";
import ServerBar from "../components/ServerBar/ServerBar";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ServerBar />
      <main className="mainContainer">
        <Component {...pageProps} />
      </main>
    </>
  );
}
