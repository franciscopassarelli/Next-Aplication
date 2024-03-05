
const path = require('path');

const NextConfig = {
  images: {
    domains: ['racketsandrunners.ca', 'www.tennis-point.es', 'acdn.mitiendanube.com', 'http2.mlstatic.com', 'acdn.mitiendanube.com', 'www.digitalsport.com.ar', 'http2.mlstatic.com', 'http2.mlstatic.com', 'encrypted-tbn0.gstatic.com','www.tennis-point.com','firebasestorage.googleapis.com', 'tenishollywood.com.ar','www.shutterstock.com','e00-marca.uecdn.es','cdn-magento2-media.head.com']
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);

    return config;
  },
};

module.exports = NextConfig;
