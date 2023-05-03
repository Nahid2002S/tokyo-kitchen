import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    const registerUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider();
    const googleAuth = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubProvider = new GithubAuthProvider();

    const githubAuth = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (logInUser)=>{
            setUser(logInUser)
        })
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
        registerUser,
        loginUser,
        logOut,
        googleAuth,
        loading,
        githubAuth,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;