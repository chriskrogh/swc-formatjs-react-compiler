import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    swcPlugins: [
      [
        "@swc/plugin-formatjs",
        {
          ast: true,
        },
      ],
    ],
    reactCompiler: true,
  },
};

export default nextConfig;
