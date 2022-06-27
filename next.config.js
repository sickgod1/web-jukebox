module.exports = {
  async redirects() {
    return [
      {
        source: '/invite',
        destination: 'https://discord.com/api/oauth2/authorize?client_id=990679488998297731&permissions=8&scope=applications.commands%20bot',
        permanent: true,
    },
    ]
  },
}