/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "https://lotulb.org",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
