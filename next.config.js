module.exports = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/blog/" : "blog",
  assetPrefix: process.env.NODE_ENV === "production" ? "/blog/" : "blog",
  // and possibly disable image optimization if needed
};
