module.exports = {
  async rewrites() {
      return [
        {
          source: '/wp-json/mc/v2/:path*',
          destination: 'https://api.beta.mejorconsalud.com/:path*',
        },
      ]
    },
}; 