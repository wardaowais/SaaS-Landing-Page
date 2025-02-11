import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import { ToastContainer } from 'react-toastify';

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: 'Layers Landing Sass',
    description: 'Created by NighteCoding',
    openGraph: {
        type: 'website',
        url: 'https://jptribe-landing-sass.vercel.app/',
        title: 'Layers - by NighteCoding',
        description: 'NighteCoding provides stable and highend solutions',
        images: [
            {
            url: 'https://jptribe-landing-sass.vercel.app/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Landing Sass by NighteCoding',
            },
        ],
    },
};

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`} >
                <Navbar />
                {children}
                <Analytics />
                <Footer />
                <ToastContainer
                    position="top-right"
                    autoClose={3000} 
                    hideProgressBar 
                    newestOnTop 
                    closeOnClick 
                    rtl={false} 
                    pauseOnFocusLoss 
                    draggable 
                    pauseOnHover
                />
            </body>
        </html>
    );
}
