"use client";

import {getProviders, signIn} from "next-auth/react";
import {useEffect, useState} from "react";
import Button from "@/components/Button";


type Provider = {
    id: string;
    name: string;
    type: string;
    signInUrl: string;
    callbackUrk: string;
    signInUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>

const AuthProviders = () => {
    const [providers, setProviders] = useState<Providers | null>(null);

    useEffect(() => {
        const fetchProviders = async () => {
            const response = await getProviders();

            console.log("response: ", response);

            setProviders(response);
        }
        fetchProviders();
    }, [])


    if (providers) {
        return (
            <div>
                {Object.values(providers).map((provider: Provider, i) => (
                    <Button
                        key={i}
                        handleClick={() => signIn(provider?.id)}
                        title="Sign In"
                    />


                ))}
            </div>)
    }


}

export default AuthProviders;
