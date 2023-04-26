/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["raw.githubusercontent.com", "imgs.search.brave.com"],
  },
};

module.exports = nextConfig;
