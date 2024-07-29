/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseUrl: process.env.BASE_URL,
    databaseUrl: process.env.DATABASE_URL,
  },
  images: {
    domains: ['encrypted-tbn0.gstatic.com', 'media.licdn.com'], // dev porpuses, will be removed...
  },
};

module.exports = nextConfig;
