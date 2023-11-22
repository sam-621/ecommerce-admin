/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'res.cloudinary.com' }]
  },
  redirects: () => [
    {
      source: '/',
      destination: '/admin/inventory',
      permanent: false
    }
  ]
};

module.exports = nextConfig;
