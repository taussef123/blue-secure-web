import { createContext, useContext, useEffect, useState } from "react";


 export const AuthContext = createContext()


export  const AuthProvider = ({children})=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const[users,setUsers]=useState([])  // multiple user
    const[currentUser,setCurrentUser]=useState(null) // current user
    const[loading,setLoading]=useState(true)

    const registerUser = (newUser)=>{
      const updatedUsers=[...users,newUser]
      setUsers(updatedUsers)
      localStorage.setItem("registerUsers",JSON.stringify(updatedUsers))
    }

    useEffect(()=>{
     
        const storedUser = localStorage.getItem("registerUsers");
        const loggedInUser = localStorage.getItem("currentUser");
        if (storedUser) {
          setUsers(JSON.parse(storedUser));
        }
        if (loggedInUser) {
          setCurrentUser(JSON.parse(loggedInUser));
          setIsLoggedIn(true);
        }
        setLoading(false);

  },[])

    const logIn = (email,password)=>{
      const matchedUser =users?.find((u)=>u.email===email && u.password===password)
      console.log("Matched user:", matchedUser);

       if(matchedUser){
        setIsLoggedIn(true)
        setCurrentUser(matchedUser)
        localStorage.setItem("currentUser",JSON.stringify(matchedUser))
        return true;
       }else{
        return false;
       }
    }

    const logOut = ()=>{
       setIsLoggedIn(false);
       setCurrentUser(null)
       localStorage.removeItem("currentUser")
    }
    return (
      <AuthContext.Provider value={{
        isLoggedIn,
        users,
        logIn,
        logOut,
        registerUser,
        currentUser,
        loading
      }}>
        {children}
      </AuthContext.Provider>
    );
}


export const useAuthContext = ()=>{
    const context = useContext(AuthContext)
    return context;
}