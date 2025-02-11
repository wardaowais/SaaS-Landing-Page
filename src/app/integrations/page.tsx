import IntegrationsComponent from '@/components/IntegrationsPage';
import React from 'react'

export const metadata = {
    title: "Layers Integrations Page ",
    description: "Integrations Page for Layers, offers a visual stunning display and informative describtion",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://jptribe-landing-sass.vercel.app/integrations", 
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

const Integrations = () => {
    return (
        <main className='pt-24 pb-14'>
            <section className='text-center'>
                <h1 className='text-5xl'>Integrations Page</h1>
                <p className='text-xl max-w-lg mx-auto mt-2'>
                    At <span className='text-lime-400'>Layers</span> we provide the best <span className='text-lime-400'>integrations</span> for your needs
                </p>
            </section>

            <section>
                <IntegrationsComponent />
            </section>
        </main>
    )
}

export default Integrations
