import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <AppMeta />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

function AppMeta() {
  return (
    <Head>
      {/* Analytics */}
      <script async src="https://cdn.splitbee.io/sb.js"></script>

      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Will Add These Later */}

      {/* <!-- Favicon --> */}

      {/* <!-- Google Meta Tags --> */}

      {/* <!-- Facebook Meta Tags --> */}

      {/* <!-- Twitter Meta Tags --> */}
    </Head>
  );
}
