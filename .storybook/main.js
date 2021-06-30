const path = require('path')
const resolve = (p) => path.join(process.cwd(), p)
module.exports = {
    webpackFinal(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@emotion/styled": resolve("node_modules/@emotion/styled"),

        };
        const fileLoaderRule = config.module.rules.find(
            (rule) => rule.test && rule.test.test('.svg')
        )
        fileLoaderRule.exclude = /\.svg$/

        config.module.rules.push({
            test: /\.svg$/,
            enforce: 'pre',
            loader: require.resolve('@svgr/webpack'),
        });

        return config;
    },
  stories: ["../stories/*.stories.tsx"],
  addons: ['@storybook/addon-knobs'],
};