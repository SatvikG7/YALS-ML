import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
        // Configure one or more authentication providers
        providers: [
                Providers.GitHub({
                        clientId: process.env.GITHUB_ID,
                        clientSecret: process.env.GITHUB_SECRET,
                }),
        ],
        database: process.env.MONGODB_URI,
        session: {
                jwt: true,
        },
        jwt: {
                secret: process.env.SECRET,
                maxAge: 60*60*24*3
        }
})