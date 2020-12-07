import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    site: process.env.NEXTAUTH_URL,
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        signIn: async (user, account, profile) => {
          if (account.provider === 'google' &&
              profile.verified_email === true ) {
            return Promise.resolve(true)
          } else {
            return Promise.resolve(false)
          }
        }
    },
    database: process.env.MONGODB_URI,
    debug: true,
  }

export default (req, res) => NextAuth(req, res, options)