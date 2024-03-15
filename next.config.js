const path = require('path');

const NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'racketsandrunners.ca' },
      { hostname: 'www.mistertennis.com'},
      { hostname: 'www.tennis-point.es' },
      { hostname: 'acdn.mitiendanube.com' },
      { hostname: 'http2.mlstatic.com' },
      { hostname: 'acdn.mitiendanube.com' },
      { hostname: 'www.digitalsport.com.ar' },
      { hostname: 'http2.mlstatic.com' },
      { hostname: 'http2.mlstatic.com' },
      { hostname: 'encrypted-tbn0.gstatic.com' },
      { hostname: 'www.tennis-point.com' },
      { hostname: 'firebasestorage.googleapis.com' },
      { hostname: 'tenishollywood.com.ar' },
      { hostname: 'www.shutterstock.com' },
      { hostname: 'e00-marca.uecdn.es' },
      { hostname: 'cdn-magento2-media.head.com' },
      { hostname: 'dcdn.mitiendanube.com' },
      { hostname: 'd28hi93gr697ol.cloudfront.net' }
    ]
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);

    return config;
  },
};

module.exports = NextConfig;


