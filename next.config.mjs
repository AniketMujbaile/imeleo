const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
        },
        {
          protocol: 'https',
          hostname: 'docketry.ai',
        },
      ],
    },
  };
  
  export default nextConfig;
  
  

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
