import React from 'react'

export const metadata = {
    title: "Layers Contact Page ",
    description: "Contact Page for Layers, where your request will be met with highest priority",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://jptribe-landing-sass.vercel.app/contact", 
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

const Contact = () => {
    return (
        <main className='py-24'>
            <section className='text-center'>
                <h1 className='text-5xl'>Contact Page</h1>
                <p className='text-xl max-w-lg mx-auto mt-2'>
                    At <span className='text-lime-400'>Layers</span> we will make sure to request your mail with <span className='text-lime-400'>highest</span> priority
                </p>
            </section>

            <section className='flex flex-col items-center justify-center mt-10'>
                <div className="w-full max-w-xl bg-gray-800 rounded-lg shadow-md p-6">
                    <form className="flex flex-wrap">
                        <input
                            type="text"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-lime-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                            placeholder="Full Name"
                        />
                        <input
                            type="email"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-lime-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                            placeholder="Email"
                        />
                        <input
                            type="number"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-lime-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                            placeholder="Phone Number"
                        />
                        <textarea
                            name="message"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-600 md:focus:outline-none focus:ring-lime-500 md:focus:border-transparent transition ease-in-out duration-fastest"
                            placeholder="Message"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-gradient-to-r flex-none from-lime-500 to-green-500 text-black/70 font-bold py-2 px-4 rounded-md mt-4 hover:bg-lime-600 hover:to-green-600 transition ease-in-out duration-150"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Contact
