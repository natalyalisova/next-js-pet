"use client";

import {getProviders,signIn} from "next-auth/react";
import {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightToBracket, faEnvelope} from "@fortawesome/free-solid-svg-icons";


type Provider = {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrk: string;
    signinUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>

const AuthProviders = () => {
    const [providers, setProviders] = useState<Providers | null>(null);

useEffect(() => {
    const fetchProviders = async () =>{
        const response = await getProviders();

        console.log("response: ", response);

        setProviders(response);
    }
    fetchProviders();
}, [])


if (providers){
    return (
        <div>
            {Object.values(providers).map((provider: Provider, i) => (
                <button key={i} onClick={() => signIn(provider?.id)}>
                    <FontAwesomeIcon icon={faArrowRightToBracket}/><span className="ml-3">{provider.id}</span> </button>
            ))}
        </div>)
}


}

export default AuthProviders;
