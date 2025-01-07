import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./server/db";
import {
  accounts,
  sessions,
  users,
  verificationTokens,
} from "./server/db/schema/google-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  callbacks: {
    authorized: async ({ auth }) => {
      // const url = request.nextUrl;
      // if (request.method === "POST") {
      //   const { authToken } = (await request.json()) ?? {};
      //   // If the request has a valid auth token, it is authorized
      //   const valid = await validateAuthToken(authToken);
      //   if (valid) return true;
      //   return NextResponse.json("Invalid auth token", { status: 401 });
      // }
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth?.user;
    },
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  pages: {
    signIn: "/auth/login",
  },
});
