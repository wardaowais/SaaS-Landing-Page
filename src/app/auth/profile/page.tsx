"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import useAuthStore from "../../stores/authStore";

const ProfilePage = () => {
    const {
        email,
        setIsAuthenticated,
        deleteUser,
        registeredUsers,
        toggleNewsletterSubscription,
    } = useAuthStore();
    const router = useRouter();
    const [hydrated, setHydrated] = useState(false); // Ensure client-side render
    const [isSubscribed, setIsSubscribed] = useState(false);

    // Ensure Zustand state is loaded before rendering UI
    useEffect(() => {
        setHydrated(true);

        // Redirect to login if not authenticated
        const isAuthenticated = Cookies.get("isAuthenticated") === "true";
        if (!isAuthenticated) {
            router.push("/login");
        }

        // Check subscription status
        const user = registeredUsers.find((user) => user.email === email);
        setIsSubscribed(user?.newsletterSubscribed || false);
    }, [router, registeredUsers, email]);

    const handleLogout = () => {
        Cookies.remove("isAuthenticated");
        setIsAuthenticated(false);
        router.push("/login");
    };

    const handleDeleteUser = () => {
        const userExists = registeredUsers.some((user) => user.email === email);

        if (userExists) {
            deleteUser(email);
            alert("User deleted!");
            router.push("/login");
        } else {
            alert("User not found!");
        }
    };

    const handleToggleSubscription = () => {
        toggleNewsletterSubscription(email);
        setIsSubscribed((prev) => !prev); // Update local state
    };

    if (!hydrated) return null;

    return (
        <main className="py-20">
            <section className="container">
                <div className="max-w-2xl p-6 rounded-xl flex flex-col items-center justify-center bg-gray-900 text-white mx-auto">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">Welcome, {email}!</h1>
                    <p className="text-base md:text-xl mb-6 ring-2 ring-lime-500 rounded-md p-1.5">
                        This is your protected profile page.
                    </p>
                    <div>
                        <p className="text-base md:text-lg mb-2">
                            {isSubscribed
                                ? "You have subscribed to the monthly newsletter."
                                : "You have not subscribed to the newsletter."}
                        </p>
                        <button
                                onClick={handleToggleSubscription}
                                className={` text-white mx-auto flex justify-center font-semibold tracking-wider ${
                                    isSubscribed
                                        ? "border-b-2 border-b-orange-500 hover:border-b-transparent transition-transform"
                                        : "border-b-2 border-b-lime-500 hover:border-b-transparent transition-transform"
                                }`}
                            >
                                {isSubscribed ? "Unsubscribe from Newsletter" : "Newsletter subscription"}
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row justify-start items-center gap-6 mt-8">
                        <button
                            onClick={handleLogout}
                            className="bg-lime-600 px-4 py-2 rounded-lg text-white hover:bg-lime-700"
                        >
                            Logout
                        </button>

                        <button
                            onClick={handleDeleteUser}
                            className="ring ring-red-500 p-1.5 rounded-lg text-white"
                        >
                            Delete User
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProfilePage;
