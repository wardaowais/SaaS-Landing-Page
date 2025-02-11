"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import useAuthStore from "../../stores/authStore";
import Link from "next/link";

const NewsPage = () => {
    const { email, registeredUsers } = useAuthStore();
    const router = useRouter();
    const [hydrated, setHydrated] = useState(false); 
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        setHydrated(true);
        const isAuthenticated = Cookies.get("isAuthenticated") === "true";
        if (!isAuthenticated) {
            router.push("/login");
        }

        const user = registeredUsers.find((user) => user.email === email);
        setIsSubscribed(user?.newsletterSubscribed || false);
    }, [router, registeredUsers, email]);

    if (!hydrated) return null;

    return (
        <main className="py-20">
            <section className="container">
                <div className="max-w-2xl p-6 rounded-xl flex flex-col items-center justify-center bg-gray-900 text-white mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">
                        Newsletter Page
                    </h1>

                    <p className="text-lg text-center mb-6">
                        Logged in as: <span className="font-bold">{email}</span>
                    </p>

                    {isSubscribed ? (
                        <p className="text-lg text-center mb-6">
                            Thank you for subscribing to our monthly newsletter!
                        </p>
                    ) : (
                        <div className="text-lg text-center mb-6">
                            You are not subscribed to our newsletter. <br/> 
                            Please visit the{" "} 
                            <Link href={'/'} className="text-lime-500 hover:underline transition-transform">
                                Home Page
                            </Link> 
                            {" "}to subscribe.
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default NewsPage;
