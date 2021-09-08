import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { auth } from '../firebase';


const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

function AuthorProvider({ children }) {
    console.log('abcde');


    
    // useState
    const [user, setUser] = useState()

    // sign up
    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    // login
    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    // logout
    const logout = () => {
        return auth.signOut()
    }


    useEffect(() => {
        const destroy = auth.onAuthStateChanged(user => {
            setUser(user)
        })
        return destroy
    }, [])

    // value 
    const value = {
        user,
        signUp,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthorProvider;