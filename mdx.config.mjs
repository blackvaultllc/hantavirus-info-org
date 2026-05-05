import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
