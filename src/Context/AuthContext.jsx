import { createContext, useContext, useState } from "react";


 export const AuthContext = createContext()


export  const AuthProvider = ({children})=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false)

    const logIn = ()=>{
       setIsLoggedIn(true);
    }

    const logOut = ()=>{
       setIsLoggedIn(false);
    }
    return (
      <AuthContext.Provider value={{
        isLoggedIn,
        logIn,
        logOut,
      }}>
        {children}
      </AuthContext.Provider>
    );
}


export const useAuthContext = ()=>{
    const context = useContext(AuthContext)
    return context;
}