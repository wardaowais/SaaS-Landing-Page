"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import useAuthStore from "../stores/authStore";
import logoImage from "../../assets/images/logo.svg";

const LoginPage = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    registeredUsers,
    setIsAuthenticated,
    rememberMe,
    setRememberMe,
  } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get("rememberMe") !== "true") {
      setEmail("");
      setPassword("");
    }
  }, [setEmail, setPassword]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userExists = registeredUsers.some(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      setIsAuthenticated(true);
      if (rememberMe) {
        Cookies.set("email", email, { expires: 7 });
        Cookies.set("password", password, { expires: 7 });
        Cookies.set("rememberMe", "true", { expires: 7 });
      }
      router.push("/auth/profile");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <main className="py-20">
      <section className="container flex flex-col items-center justify-center text-white">
        <motion.div
          className="w-full max-w-lg bg-gray-800 rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <Link href={"/"}>
              <Image src={logoImage} alt="Logo" className="h-9 md:h-auto w-auto" />
            </Link>
          </div>
          <h1 className="text-center text-3xl font-semibold mb-6">Welcome Back</h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 bg-gray-700 rounded border-gray-600 focus:ring-green-500"
                />
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
              <Link href="/forgot-password">
                <span className="text-sm text-green-500 hover:underline">
                  Forgot Password?
                </span>
              </Link>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-green-500 text-black rounded-lg py-3 font-semibold hover:bg-green-600"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Login
            </motion.button>
          </form>
          <p className="text-center text-sm text-gray-400 mt-6">
            Dont have an account?{" "}
            <Link href="/register">
              <span className="text-green-500 hover:underline">Sign Up</span>
            </Link>
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default LoginPage;
