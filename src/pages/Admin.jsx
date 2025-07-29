import { Navigate } from "react-router";
import { useAuthContext } from "../Context/AuthContext";

const Admin=()=>{
    const{isLoggedIn}= useAuthContext()
      console.log("Admin page isLoggedIn:", isLoggedIn);

    if(!isLoggedIn){
       return <Navigate to="/signin" replace/>
    }
    return (
      <div>
        <h1>Welcome to the Admin Dashboard</h1>
      </div>
    );
}



export default Admin;