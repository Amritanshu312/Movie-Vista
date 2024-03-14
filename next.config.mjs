/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'webneel.com',
        port: '',
      },
    ],
  },
  env: {
    TMDB_READ_API_KEY: `Bearer ${process.env.TMDB_READ_API_KEY}`
  }
};

export default nextConfig;
