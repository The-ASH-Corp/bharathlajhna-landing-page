/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'blm-cms.appii.space',
        },
      ],
    },
  };
  export default nextConfig;
  