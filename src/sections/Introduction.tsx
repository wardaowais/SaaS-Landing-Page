"use client";

import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: scrollTarget, offset: ['start end', 'end end'] });

    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);
    
    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        })
    }, [wordIndex]);

    return (
        <section className="py-16 lg:py-28">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40">
                    <div className="justify-center flex">
                        <Tag className="mb-4">Introducing Layers</Tag>
                    </div>
                    <div className="text-center text-4xl md:text-6xl lg:text-7xl font-medium mt-8">
                        <span>Your creative process deserves better.</span>{" "}
                        <span className="">
                            {words.map((word, wordIndex) => (
                                <span key={wordIndex} className={twMerge("transition duration-500 text-white/15", wordIndex < currentWord && "text-white")}>
                                    {`${word} `}
                                </span>  
                            ))}
                        </span>
                        <span className="text-lime-400 block">Thats why we built Layers.</span>
                    </div>
                </div>

                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    )
}
