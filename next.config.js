/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      typedRoutes: true,
    },
  }
   
  module.exports = {
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  }