module.exports = {
  async redirects() {
    return [];
  },
  pageExtensions: ['page.tsx', 'api.ts'],
  generateEtags: true,
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,
};
