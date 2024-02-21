/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/admin",
      destination: "/admin/index.html",
    },
  ],
  redirects: async () => [
    {
      source: "/home",
      destination: "/",
      permanent: true,
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        pathname: "/avatars/**",
      },
    ],
  },
};

export default nextConfig;
