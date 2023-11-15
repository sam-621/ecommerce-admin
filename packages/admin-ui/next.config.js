/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => [
    {
      source: '/',
      destination: '/admin',
      permanent: false
    }
  ]
};

module.exports = nextConfig;
