import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectIt } from "../../../db/db";
import User from "../../../db/models/user";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },

  callbacks: {
    async signIn({ user }) {
      try {
        await connectIt();
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          await User.create({
            fullName: user.name,
            email: user.email,
            provider: "google",
          });
        }
        return true;
      } catch (err) {
        console.error("Error saving Google user:", err);
        return false;
      }
    },

    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.email = profile.email;
        token.name = profile.name;
        token.picture = profile.picture;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        email: token.email,
        name: token.name,
        image: token.picture,
      };
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
