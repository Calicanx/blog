module.exports = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/<repo-name>" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/<repo-name>/" : "",
  // and possibly disable image optimization if needed
};
