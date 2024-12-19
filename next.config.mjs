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
    experimental:{
      serverActions:{
        bodySizeLimit: '10mb'
      }
    }
  };
  export default nextConfig;
  