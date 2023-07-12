import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          data-goatcounter="https://kleber.goatcounter.com/count"
          data-goatcounter-settings='{"no_onload": true, "allow_local": true}'
          async
          src="//gc.zgo.at/count.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
