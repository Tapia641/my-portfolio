/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // genera el sitio estático en ./out
  basePath: '/my-portfolio', // https://tapia641.github.io/my-portfolio
  assetPrefix: '/my-portfolio/',
  trailingSlash: true,
  images: { unoptimized: true }, // requerido por `export` si usas next/image
};

export default nextConfig;
