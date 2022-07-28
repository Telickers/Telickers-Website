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
      
      {/* <!-- Favicon --> */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* <!-- Google Meta Tags --> */}
      <meta
        name="description"
        content="Expert Web Development team providing high-quality & cost-effective solutions."
      />
      <meta name="keywords" content="business web website webdesign webdevelopment development e-commerce landing-page portfolio blogs domain names custom emails ui ux design prototype interfacedesign designsupport" />
      <meta name="author" content="Telickers" />
      <meta name="copyright" content="Telickers" />
      <meta name="application-name" content="Telickers" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://telickers.net/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Telickers" />
      <meta
        property="og:description"
        content="Expert Web Development team providing high-quality & cost-effective solutions."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dtp45ukcw/image/upload/v1655873178/Logo_khnerg.jpg"
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="telickers.net" />
      <meta property="twitter:url" content="https://telickers.net/" />
      <meta name="twitter:title" content="Telickers" />
      <meta
        name="twitter:description"
        content="Expert Web Development team providing high-quality & cost-effective solutions."
      />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/dtp45ukcw/image/upload/v1655873178/Logo_khnerg.jpg"
      />
    </Head>
  );
}
