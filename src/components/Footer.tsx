import Image from "next/image";
import {footerLinks} from "@/constants";
import Link from "next/link";
import React from "react";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type ColumnProps = {
    title: string;
    links: Array<string>;
}

const FooterColumn = ({title, links}: ColumnProps) => (
    <div className="footer_column">
        <h4 className="font-semibold">{title}</h4>
        <ul className="flex flex-col gap-2">
            {links.map((link) => <Link href="/" key={link}>{link}</Link>)}
        </ul>
    </div>
)

const Footer = () => {
    return (
        <footer className="flexStart footer">
            <div className="flex flex-col gap-12 w-full">
                <div className="flex items-start flex-col">
                    <Image
                        src="/images/logo.svg"
                        alt="Stand with Ukraine logo"
                        width={120}
                        height={40}
                    />
                    <p className="text-start text-sm font-normal mt-5 max-w-xs">
                        Flexibble is the world's leading community for creatives to share, grow, and get hired.
                    </p>
                </div>
                <div className="flex flex-wrap gap-12">
                    {footerLinks.map((column, index) => (
                        <FooterColumn key={index} title={column.title} links={column.links}/>
                    ))}
                </div>
            </div>
            <div className="flexBetween footer_copyright">
                <p>@ 2023 Flexible. All rights reserved <span className="ml-3"><FontAwesomeIcon
                    icon={faEnvelope} width={25} height={25}/> nglisova@gmail.com </span></p>
                <p className="text-gray">
                    <span className="text-black font-semibold">10,214</span> projects submitted
                </p>
            </div>
        </footer>
    )
};

export default Footer;
