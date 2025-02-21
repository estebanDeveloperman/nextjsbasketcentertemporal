import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';


const nextConfig: NextConfig = {
  basePath: isProd ? '/nextjsbasketcentertemporal' : '',
  output: 'export',
  distDir: 'dist',
  assetPrefix: "/nextjsbasketcentertemporal", // ✅ Prefijo correcto
  images: {
    unoptimized: true,
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
