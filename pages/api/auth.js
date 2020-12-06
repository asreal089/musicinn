import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'


providers: [
  Providers.Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
]

export default (req, res) => NextAuth(req, res, options)