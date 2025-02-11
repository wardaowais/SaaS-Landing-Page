import FaqComponent from '@/components/Faq'
import React from 'react'

export const metadata = {
  title: "Layers FAQ Page ",
  description: "Faq Page for Layers, which provide you with the best questions and answers",
  openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://jptribe-landing-sass.vercel.app/faq", 
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

const Faq = () => {
  return (
    <main className='py-24'>
      <section className='text-center'>
        <h1 className='text-5xl'>FAQ Page</h1>
        <p className='text-xl max-w-lg mx-auto mt-2'>
          At <span className='text-lime-400'>Layers</span> we will make sure to cover as many <span className='text-lime-400'>answers</span>
        </p>
        </section>

        <section>
          <FaqComponent />
        </section>
    </main>
  )
}

export default Faq
