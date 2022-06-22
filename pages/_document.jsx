import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head />
        <body>
          {/* Analytics */}
          <Script async src="https://cdn.splitbee.io/sb.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
