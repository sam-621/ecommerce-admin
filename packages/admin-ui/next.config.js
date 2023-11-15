/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'res.cloudinary.com' }]
  },
  redirects: () => [
    {
      source: '/',
      destination: '/admin',
      permanent: false
    }
  ]
};

module.exports = nextConfig;
