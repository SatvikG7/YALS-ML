import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { FaunaAdapter } from "@next-auth/fauna-adapter";
import Client from "../../../lib/fauna";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    secret: process.env.SECRET,
    adapter: FaunaAdapter(Client),
    session: {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        strategy: "database",
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    },
    theme: {
        colorScheme: "dark",
        logo: "/logo.png",
        brandColor: "#000",
    },
});
