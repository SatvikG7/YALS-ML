import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { FaunaAdapter } from "@next-auth/fauna-adapter";
import {Client} from "../../../utils/fauna"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    adapter: FaunaAdapter({ faunaClient: Client }),
    session: {
        jwt: true,
    },
    jwt: {
        secret: process.env.SECRET,
        maxAge: 60 * 60 * 24 * 3,
    },
});
