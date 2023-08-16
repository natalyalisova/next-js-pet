"use client"


import React, {ReactNode, useCallback, useRef} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {faArrowRightToBracket, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Modal = ({children}: {
    children: ReactNode
}) => {

    const overlay = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        router.push('/');
    }, [router]);

    const handleClick = useCallback((event: React.MouseEvent) => {
        if ((event.target === overlay.current) && onDismiss){
            onDismiss();
        }
    },[onDismiss,overlay]);

    return (
        <div ref={overlay} className="modal" onClick={handleClick}>
            <button type="button" onClick={onDismiss} className="absolute top-4 right-8">

                <FontAwesomeIcon icon={faXmark} color="white"/>
            </button>
            <div ref={wrapper} className="modal_wrapper">
                {children}
            </div>
        </div>
    )
}

export default Modal;
