import type { Metadata } from "next";
import "../globals.css"
// import {Are_You_Serious} from "next/font/google"
import { Toaster } from "react-hot-toast"
import Navbar from "@/components/navbar";

// const are_you_serious = Are_You_Serious({
//     subsets: ["latin"],
//     weight: "400"
// })

export const metadata: Metadata = {
    title: "payload playground",
    description: "Just a dev playing around with payload!"
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full" >
            <body>
                <Navbar />
                <main>
                    {children}
                </main>
                <Toaster position="bottom-center" />
            </body>
        </html>
    )
}