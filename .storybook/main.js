const path = require('path');

module.exports = {
   webpackFinal: async (config) => {
    config.resolve = {
      extensions: ['.js', '.jsx'],
      alias: {
        src: path.join(__dirname, '../src/')
      }
    }
    return config;
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    "@storybook/addon-postcss"
  ]
}
