// next.config.js
module.exports = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/blog" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/blog/" : "",
  // Optionally disable image optimization for static export:
  images: {
    unoptimized: true,
  },
};
