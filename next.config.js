const path = require('path');
const common = require('./webpack.common');

module.exports = {
  webpack(config, options) {
    config.resolve.alias['src'] = path.join(__dirname, '/src');
    return config;
  },
  future: {
    webpack5: true
  }
}