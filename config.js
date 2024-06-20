import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import prisma from "./libs/prisma";

export const NextAuthOptions = {
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'jwt'
    },
    providers: [CredentialsProvider({
        credentials: {
            email: {},
            password: {}
        },
        async authorize(credentials) {

            const user = await prisma.users.findFirst({
                where: {
                    email: credentials.email
                }
            })
            const correctPassword = await compare(credentials.password, user.password)

            if (correctPassword) {
                return {
                    id: user.id,
                    email: user.email,
                    role: user.role
                }
            }
            return null
        }
    })],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role
                token.id = user.id
            }
            return token
        },
        async session({ token, session }) {

            session.user = {
                id: token.id,
                email: token.email,
                role: token.role
            }
            return session
        }
    }
}