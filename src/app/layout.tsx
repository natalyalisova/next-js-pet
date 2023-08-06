import './globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata = {
    title: 'Nerv project',
    description: 'Showcase and discover remarcable developers projects',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Head>
            <link rel="shortcut icon" href="/images/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        </Head>
        <body>
        <Navbar/>
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    )
}
