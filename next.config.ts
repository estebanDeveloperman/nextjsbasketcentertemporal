import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com", // Permite cargar imágenes desde este dominio
      },
    ],
    formats: ["image/avif", "image/webp"], // Formatos optimizados
  },
  experimental: {
    optimizeCss: true, // Optimización automática de CSS
  },
  reactStrictMode: true,
  compress: true, // Activa la compresión Gzip/Brotli
};

export default nextConfig;
