"use client"
import { createContext, useContext, useEffect, useState } from "react"

import { auth, provider, db } from "@/app/firebase/config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"

const AuthContext = createContext()
export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    })

    const router = useRouter()

    const registerUser = async (values) => {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
    }

    const loginUser = async (values) => {
        await signInWithEmailAndPassword(auth, values.email, values.password)
    }

    const logOut = async () => {
        await signOut(auth)
    }

    const googleLogin = async () => {
        await signInWithPopup(auth, provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {

            if (user) {
                // const docRef = doc(db, "roles", user.uid)
                // const userDoc = await getDoc(docRef)

                // if (userDoc.data()?.rol === "admin") {
                    setUser({
                        logged: true,
                        email: user.email,
                        uid: user.uid
                    })
                // } else {
                //     router.push("/unauthorized")
                //     logOut()
                // }
            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                })
            }

        })
    }, [])


    return (
        <AuthContext.Provider
            value={{
                user,
                registerUser,
                loginUser,
                logOut,
                googleLogin
            }}>
            {children}
        </AuthContext.Provider>
    )
}