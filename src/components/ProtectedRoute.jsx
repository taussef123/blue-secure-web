import { Navigate} from "react-router";
import { useAuthContext } from "../Context/AuthContext";


const ProtectedRoute=({children})=>{
 
 const{isLoggedIn} = useAuthContext()
     if(!isLoggedIn){
    return  <Navigate to="/signin" replace/>
      
     }
      return children;
}

export default ProtectedRoute;