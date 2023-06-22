/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ['default', 'en', 'es'],
    defaultLocale: 'default',
    localeDetection: false,
  },
};

module.exports = nextConfig;
