"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlockInTextCardProps {
    tag: string;
    text: React.ReactNode;
    examples: string[];
}

export const SupportComponent = () => {
    return (
        <section className="pt-16 pb-10">
            <div className="flex items-center justify-center text-neutral-300">
                <BlockInTextCard
                    tag="/ Support"
                    text={
                        <>
                            <span className="font-bold text-lime-400">Have questions?</span> We&apos;d love to help! Contact support
                            for any issue you may face.
                        </>
                    }
                    examples={[
                        "Does your product work for SMBs?",
                        "Can I pause my membership without losing my data?",
                        "How does seat based pricing work?",
                        "What's the meaning of life?",
                    ]}
                />
            </div>
        </section>
    );
};

const BlockInTextCard = ({ tag, text, examples }: BlockInTextCardProps) => {
    return (
        <div className="w-full max-w-xl space-y-6">
            <div>
                <p className="mb-1.5 text-3xl font-semibold uppercase">{tag}</p>
                <hr className="border-neutral-700" />
            </div>
            <p className="max-w-lg text-xl leading-relaxed">{text}</p>
            <div>
                <Typewrite examples={examples} />
                <hr className="border-neutral-300" />
            </div>

            <button className="w-full rounded-full border border-neutral-600 py-2 text-xl font-medium hover:bg-lime-500 hover:text-neutral-800 transition-colors">
                <Link href={'/contact'} >Contact Support</Link>
            </button>
        </div>
    );
};

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }: { examples: string[] }) => {
    const [exampleIndex, setExampleIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setExampleIndex((pv) => (pv + 1) % examples.length);
        }, SWAP_DELAY_IN_MS);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <p className="mb-2.5 text-base font-light uppercase">
            <span className="inline-block size-2 " />
            <span className="ml-3">
                EXAMPLE:{" "}
                {examples[exampleIndex].split("").map((l, i) => (
                    <motion.span
                        initial={{
                            opacity: 1,
                        }}
                        animate={{
                            opacity: 0,
                        }}
                        transition={{
                            delay: FADE_DELAY,
                            duration: MAIN_FADE_DURATION,
                            ease: "easeInOut",
                        }}
                        key={`${exampleIndex}-${i}`}
                        className="relative"
                    >
                        <motion.span
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: i * LETTER_DELAY,
                                duration: 0,
                            }}
                        >
                            {l}
                        </motion.span>
                        <motion.span
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                delay: i * LETTER_DELAY,
                                times: [0, 0.1, 1],
                                duration: BOX_FADE_DURATION,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
                        />
                    </motion.span>
                ))}
            </span>
        </p>
    );
};