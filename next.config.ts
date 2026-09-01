import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
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
