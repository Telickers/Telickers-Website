/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "https://lotuslb.org",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
