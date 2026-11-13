import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/opengraph-image": ["./public/assets/creation_of_adam.png"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.philosrach.com" }],
        destination: "https://philosrach.com/:path*",
        permanent: true,
      },
      { source: "/work/:path*", destination: "/#experience", permanent: true },
      { source: "/projects", destination: "/#works", permanent: true },
      { source: "/blog", destination: "/#writing", permanent: true },
      { source: "/books", destination: "/#reading", permanent: true },
      { source: "/about", destination: "/#preface", permanent: true },
      { source: "/colophon", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
