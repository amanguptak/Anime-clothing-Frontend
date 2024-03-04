const { createProxyMiddleware } = require('http-proxy-middleware');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}


const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
 
  
}
module.exports = nextConfig
// async rewrites() {
//   return [
//     {
//       source: 'api/:path*',
//       destination: 'http://localhost:8000/api/:path*', // Replace with your API server
//     },
//   ];
// },