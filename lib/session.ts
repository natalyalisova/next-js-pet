import {NextAuthOptions, User} from "next-auth";
import {getServerSession} from "next-auth/next";
import Google from "next-auth/providers/google";
import {SessionInterface, UserProfile} from "../common.types";
import {createUser, getUser} from "./actions";
import {JWT} from "next-auth/jwt";
import jsonwebtoken from "jsonwebtoken";
import {AdapterUser} from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    jwt: {
        encode: ({secret, token}) => {
            const encodedToken = jsonwebtoken.sign({
                ...token,
                iss: "grafbase",
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7
            }, secret)
            return encodedToken;
        },
        decode: async ({secret, token}) => {
            const decodedToken = jsonwebtoken.verify(token!, secret) as JWT;
            return decodedToken;
        }
    },
    theme: {
        colorScheme: "light",
        logo: "logo.png"
    },
    callbacks: {
        //start a new session for a user
        async session({session}) {
            const email = session?.user?.email as string;
            try {
                const data = await getUser(email) as {
                    user?: UserProfile
                }
                return {
                    ...session,
                    user: {
                        ...session.user,
                        ...data?.user
                    }
                };
            } catch (error) {
                console.log("Error retrieving user data", error);
                return session;
            }
        },
        async signIn({user}: {
            user: AdapterUser | User
        }) {
            try {
                const userExists = await getUser(user?.email as string) as {
                    user?: UserProfile
                }; //get the user from DB if they exist

                if (!userExists.user) {
                    await createUser(
                        user.name as string,
                        user.email as string,
                        user.image as string
                    );
                }  //if they don't exist, create them in DB

                return true;
            } catch (error: any) {
                console.log('error checking if a user exists or creating them:', error);
                return false;
            }
        }
    }
};

export async function getCurrentUser() {
    return await getServerSession(authOptions) as SessionInterface;
}
