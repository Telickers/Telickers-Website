import Head from "next/head";

export default function SEO({ title, description, keywords }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
