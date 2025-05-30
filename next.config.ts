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
        hostname: 'esimfacil.com.br',
        port: '',
        pathname: '/assets/images/**',
      },
      {
        protocol: 'https',
        hostname: 'esimfacil.com.br',
        port: '',
        pathname: '/assets/icons/**',
      },
      {
        protocol: 'https',
        hostname: 'esimfacil.com.br',
        port: '',
        pathname: '/assets/profiles/**',
      },
    ],
  },
  headers: async () => {
    return [
      {
        source: '/assets/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/assets/icons/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/assets/profiles/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/_vercel/insights/script.js',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: isAnalyze || isProduction,
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json'],
  },
};

export default withBundleAnalyzer(nextConfig);
