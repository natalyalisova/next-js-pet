import {NextAuthOptions, User} from "next-auth";
import AdapterUser from "next-auth/adapters";
import {getServerSession} from "next-auth/next";
import Google from "next-auth/providers/google";
import {SessionInterface} from "../common.types";
import {getUser} from "./actions";
import {UserProfile} from "../common.types";


export const authOptions: NextAuthOptions = {
    providers: [
        Google ({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    // jwt: {
    //     encode: ({secret, token})=>{
    //
    //     },
    //     decode: async({secret, token}) => {
    //
    //     }
    // },
    theme: {
        colorScheme: "light",
        logo: "logo.png"
    },
    callbacks: {
        async session({session}) {
            return session;   //start a new session for a user
        },
        async signIn({user}: { user: AdapterUser | User }) {
            try {
                const userExists = await getUser(user?.email as string) as {user?: UserProfile}; //get the user from DB if they exist

                if (!userExists.user){
                   // await  createUser
                }  //if they don't exist, create them in DB

                return true;
            } catch (error: any) {
                console.log('error checking if a user exists or creating them:', error);
                return false;
            }
        }
    }
};

export async function getCurrentUser(){
    return await getServerSession(authOptions) as SessionInterface;
}
