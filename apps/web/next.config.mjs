import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true, // export required
  },
}

export default withContentlayer(nextConfig)
