const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.(jpe?g|png|svg)$/i,
      loader: 'responsive-loader',
      options: {
        adapter: require('responsive-loader/sharp'),
      },
    });

    return config;
  },
};

module.exports = nextConfig;
