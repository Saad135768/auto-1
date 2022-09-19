/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['auto1-js-task-api--mufasa71.repl.co', 'www.iconsdb.com'],
  },
  env: {
    REACT_APP_API_URL: 'https://auto1-mock-server.herokuapp.com/api',
  }
}
