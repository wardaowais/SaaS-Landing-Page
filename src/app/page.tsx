import CallToAction from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Support from "@/sections/Support";

export const metadata = {
    title: "Layers Landing Sass Page ",
    description: "Layers beautiful landing page with modern technologies",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://jptribe-landing-sass.vercel.app/", 
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

export default function Home() {
    return (
        <main>
            <Hero />
            <LogoTicker />
            <Introduction />
            <Features />
            <Integrations />
            <Faqs />
            <CallToAction />
            <Support />
        </main>
    )
    
}
