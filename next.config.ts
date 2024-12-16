import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = isGithubActions
  ? process.env.GITHUB_REPOSITORY?.split("/")[1]
  : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? `/${repo}` : "",
  assetPrefix: isGithubActions ? `/${repo}/` : "",
  images: {
    unoptimized: true, // Required for `next export` to work with images
  },
};

export default nextConfig;
