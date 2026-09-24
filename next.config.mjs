/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.bharathlajhna.com',
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
  
