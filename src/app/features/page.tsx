import { FeaturesComponent } from '@/components/FeaturesPage';
import React from 'react'

export const metadata = {
    title: "Layers Features Page ",
    description: "Features Page for Layers, offers a visual stunning display and informative describtion",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://jptribe-landing-sass.vercel.app/features", 
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

const Features = () => {
    return (
        <main className='pt-8'>
            <section>
                <FeaturesComponent />
            </section>
        </main>
    )
}

export default Features
