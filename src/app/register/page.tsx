"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "../stores/authStore";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../assets/images/logo.svg";

const RegisterPage = () => {
    const { registerUser, setEmail, setPassword } = useAuthStore();
    const router = useRouter();
    const [email, setLocalEmail] = useState("");
    const [password, setLocalPassword] = useState("");

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();

        if (email && password) {
            registerUser(email, password);
            setEmail(""); 
            setPassword(""); 
            alert("Registration successful! Please log in.");
        router.push("/login");
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <main className="py-20">
            <section className="container flex items-center justify-center text-white">
                <div className="w-full max-w-lg bg-gray-800 rounded-xl p-8 shadow-lg">
                <div className="flex justify-center mb-6">
                    <Link href={"/"}>
                        <Image src={logoImage} alt="Logo" className="h-9 md:h-auto w-auto" />
                    </Link>
                </div>
                    <h1 className="text-center text-3xl font-bold mb-6">Register</h1>

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setLocalEmail(e.target.value)}
                                className="w-full bg-gray-700 rounded-lg p-3 border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setLocalPassword(e.target.value)}
                                className="w-full bg-gray-700 rounded-lg p-3 border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-black rounded-lg py-3 hover:bg-green-600"
                        >
                            Register
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-400 mt-6">
                        Already have an account?{" "}
                        <Link href="/login">
                            <span className="text-green-500 hover:underline">Login</span>
                        </Link>
                    </p>
                </div>
                
            </section>
        </main>
    );
};

export default RegisterPage;
