"use client";

import Button from "@/components/Button";
import heroImgOne from '@/assets/images/design-example-1.png';
import heroImgTwo from '@/assets/images/design-example-2.png';
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import cursorImage from '@/assets/images/cursor-you.svg';
import useAuthStore from "../app/stores/authStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Hero() {
    const { toggleNewsletterSubscription } = useAuthStore();
    const [email, setEmail] = useState("");
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => { 
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }]
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [leftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5, ease: 'easeInOut' }]
        ]);

        rightDesignAnimate([
            [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 0.5 }],
            [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }]
        ]);

        rightPointerAnimate([
            [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
            [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }]
        ]);
    }, []);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            toast.error("Please enter a valid email!");
            return;
        }
        // Subscribe to newsletter
        toggleNewsletterSubscription(email);
        toast.success("You have subscribed to the monthly newsletter!");
    };

    return (
        <main className="py-16 lg:py-24 overflow-x-clip" style={{ cursor: `url(${cursorImage.src}), auto` }}>
            <section className="relative container">
                <motion.div 
                    ref={leftDesignScope} 
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute -left-32 top-16 hidden lg:block cursor-grab"
                >
                    <Image 
                        src={heroImgOne} 
                        alt="Design example Image 1" 
                        draggable={false}
                    />
                </motion.div>
                <motion.div 
                    ref={leftPointerScope} 
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-96 hidden lg:block"
                >
                    <Pointer name="Andrea" />
                </motion.div>

                <motion.div 
                    ref={rightDesignScope} 
                    initial={{ opacity: 0, x: 100, y: 100 }}
                    drag
                    className="absolute -right-64 -top-12 hidden lg:block cursor-grab"
                >
                    <Image 
                        src={heroImgTwo} 
                        alt="Design example Image 2" 
                        draggable={false}
                    />
                </motion.div>
                <motion.div 
                    ref={rightPointerScope} 
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="absolute right-80 -top-4 hidden lg:block"
                >
                    <Pointer name="Bryan" color="red" />
                </motion.div>

                <div className="flex justify-center items-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-center mt-6">Impactful design, created effortlessly</h1>
                <p className="text-center text-lg md:text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Design tools shouldnt slow you down. Layers combines powerfull features 
                    with an intuitive interface that keeps you in your create flow
                </p>

                <form className="flex border border-white/15 rounded-full mt-8 p-2 max-w-lg mx-auto" onSubmit={handleSubscribe}>
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="bg-transparent px-4 md:flex-1 w-full focus:outline-none" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button 
                        type="submit" 
                        variant="primary" 
                        className="whitespace-nowrap hover:bg-lime-500 transition-colors"
                        size="sm"
                    >
                        Sign up
                    </Button>
                </form>
            </section>
        </main>
    )
}
