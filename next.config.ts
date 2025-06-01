import type { NextConfig } from 'next';

const isAnalyze = process.env.ANALYZE === 'true';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: isAnalyze,
});

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  compress: true,
  compiler: {
    removeConsole: isProduction,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'teste-performance-lcp.vercel.app',
        port: '',
        pathname: '/assets/images/**',
      },
      {
        protocol: 'https',
        hostname: 'teste-performance-lcp.vercel.app',
        port: '',
        pathname: '/assets/icons/**',
      },
      {
        protocol: 'https',
        hostname: 'teste-performance-lcp.vercel.app',
        port: '',
        pathname: '/assets/profiles/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  headers: async () => {
    return [
      {
        source: '/assets/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Accept', value: 'image/webp' },
        ],
      },
      {
        source: '/assets/icons/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Accept', value: 'image/webp' },
        ],
      },
      {
        source: '/assets/profiles/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Accept', value: 'image/webp' },
        ],
      },
      {
        source: '/_vercel/insights/script.js',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: isAnalyze || isProduction,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@vercel/analytics', 'react-query'],
    esmExternals: 'loose',
  },
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json'],
  },
};

export default withBundleAnalyzer(nextConfig);
