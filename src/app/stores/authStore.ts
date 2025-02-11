import { create } from "zustand";
import Cookies from "js-cookie";

const loadUsers = () => {
    if (typeof window !== "undefined") {
        const users = localStorage.getItem("registeredUsers");
        return users ? JSON.parse(users) : [];
    }
    return [];
};

const loadAuthState = () => Cookies.get("isAuthenticated") === "true";

interface AuthState {
    email: string;
    password: string;
    isAuthenticated: boolean;
    rememberMe: boolean;
    registeredUsers: { email: string; password: string; newsletterSubscribed?: boolean }[];
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setRememberMe: (remember: boolean) => void;
    registerUser: (email: string, password: string) => void;
    deleteUser: (email: string) => void;
    toggleNewsletterSubscription: (email: string) => void;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
    logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
    email: Cookies.get("rememberMe") === "true" ? Cookies.get("email") || "" : "",
    password: Cookies.get("rememberMe") === "true" ? Cookies.get("password") || "" : "",
    isAuthenticated: loadAuthState(),
    rememberMe: Cookies.get("rememberMe") === "true",
    registeredUsers: loadUsers(),

    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),

    setRememberMe: (remember) => {
        set({ rememberMe: remember });
        Cookies.set("rememberMe", remember.toString(), { expires: 7 });

        if (!remember) {
            Cookies.remove("email");
            Cookies.remove("password");
            Cookies.remove("rememberMe");
        }
    },

    registerUser: (email, password) =>
        set((state) => {
            const updatedUsers = [...state.registeredUsers, { email, password, newsletterSubscribed: false }];
            localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
            return { registeredUsers: updatedUsers };
        }),

    deleteUser: (email) =>
        set((state) => {
            const updatedUsers = state.registeredUsers.filter((user) => user.email !== email);
            localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
            return { registeredUsers: updatedUsers };
        }),

    toggleNewsletterSubscription: (email) =>
        set((state) => {
            const updatedUsers = state.registeredUsers.map((user) =>
                user.email === email
                    ? { ...user, newsletterSubscribed: !user.newsletterSubscribed }
                    : user
            );
            localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
            return { registeredUsers: updatedUsers };
        }),

    setIsAuthenticated: (isAuthenticated) => {
        set({ isAuthenticated });
        if (isAuthenticated) {
            Cookies.set("isAuthenticated", "true", { expires: 7 });
        } else {
            Cookies.remove("isAuthenticated");
        }
    },

    logout: () =>
        set(() => {
            Cookies.remove("isAuthenticated");
            Cookies.remove("email");
            Cookies.remove("password");
            Cookies.remove("rememberMe");
            return { email: "", password: "", isAuthenticated: false, rememberMe: false };
        }),
}));

export default useAuthStore;
