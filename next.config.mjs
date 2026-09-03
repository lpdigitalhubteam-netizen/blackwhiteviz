/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hostinger's git builder has old glibc — skip native image optimizer (sharp).
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/services/2d-3d-floor-plans",
        destination: "/services/3d-walkthrough-videos",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
