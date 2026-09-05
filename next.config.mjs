/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hostinger's git builder has old glibc — skip native image optimizer (sharp).
  images: {
    unoptimized: true,
  },
  async headers() {
    const immutable = "public, max-age=31536000, immutable";
    const month = "public, max-age=2592000, stale-while-revalidate=86400";

    return [
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: immutable }],
      },
      {
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: immutable }],
      },
      {
        source: "/project/:path*",
        headers: [{ key: "Cache-Control", value: month }],
      },
      {
        source: "/logo/:path*",
        headers: [{ key: "Cache-Control", value: month }],
      },
      {
        source: "/clients/:path*",
        headers: [{ key: "Cache-Control", value: month }],
      },
      {
        source: "/film/:path*",
        headers: [{ key: "Cache-Control", value: month }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/services/2d-3d-floor-plans",
        destination: "/services/3d-walkthrough-videos",
        permanent: true,
      },
      {
        source: "/services/landscape-rendering",
        destination: "/services/360-panorama",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
    return [
      {
        source: "/services/2d-3d-floor-plans",
        destination: "/services/3d-walkthrough-videos",
        permanent: true,
      },
      {
        source: "/services/landscape-rendering",
        destination: "/services/360-panorama",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
