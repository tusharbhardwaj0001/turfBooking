import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    getAuth
} from "firebase/auth";
import { auth } from "../firebase-config/config";

// Create a context for user authentication
const userAuthContext = createContext();

// Provider component to manage user authentication state
export function UserAuthContextProvider({ children }) {
    // Initialize user state
    const [user, setUser] = useState(null);

    // Function to sign up a new user
    async function signup(email, password) {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Error signing up:", error);
            throw error;
        }
    }

    // Function to log in an existing user
    async function login(email, password) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    }

    // Function to log out the current user
    async function logout() {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error logging out:", error);
            throw error;
        }
    }

    // Function to sign in with Google
    async function googleSignin() {
        const googleAuthProvider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, googleAuthProvider);
        } catch (error) {
            console.error("Error signing in with Google:", error);
            throw error;
        }
    }

    // Use effect to listen for changes in authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        // Cleanup function to unsubscribe from onAuthStateChanged
        return () => {
            unsubscribe();
        };
    }, []);

    // Provide user authentication context to children components
    return (
        <userAuthContext.Provider
            value={{ user, signup, login, logout, googleSignin }}
        >
            {children}
        </userAuthContext.Provider>
    );
}

// Hook to consume user authentication context
export function useUserAuth() {
    return useContext(userAuthContext);
}
