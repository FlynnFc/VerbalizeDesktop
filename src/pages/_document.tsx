import { Html, Head, Main, NextScript } from "next/document";
import ServerBar from "../components/ServerBar";

export default function Document() {
  return (
    <Html>
      <Head />
      <ServerBar />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
