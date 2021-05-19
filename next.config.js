module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/tasteit/image/upload/',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
