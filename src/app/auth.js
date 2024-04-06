import NextAuth from 'next-auth';
import credentials from 'next-auth/providers/credentials';
import DbConnect from './mongodb/DbConnect';
import User from './mongodb/models/user';

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth({
  providers: [
    credentials({
      name: 'credentials',
      async authorize(credentials) {
        await DbConnect();

        const user = await User.findOne({
          username: credentials?.username,
          password: credentials?.password,
          role: credentials?.role,
        });

        if (!user) {
          return null;
        }

         

        return user;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/login',
    signOut: '/logout',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
});
