import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../Context/AuthContext";


const SignIn = ()=>{
  const navigate = useNavigate()
 const{users,logIn,loading}= useAuthContext()
  const[formData,setFormData]=useState({
    email:"",
    password:"",
  })

  const handleChange = (event)=>{
    const{name,value}=event.target
    setFormData({
      ...formData,[name]:value
      
    })

  }

  const handleSubmit = (event)=>{
   event.preventDefault()

   const userFound =users.find((user)=>user.email===formData.email && user.password===formData.password)
    console.log("User found:", userFound);
    console.log("All users in context:", users);
   if(userFound){
    const success =logIn(formData.email,formData.password);
    if(success){
      alert("User Logged in successfully.");
      navigate("/admin");
}else{
  alert("Invalid email or password")
}
    
   }else{
    alert("Invalid email or password")
   }


   console.log("Trying to log in with:",formData);
   
    
      setFormData({
        email:"",
        password:"",
      })
  }
    if (loading) {
      return <p className="text-center mt-10">Loading user data...</p>;
    }
    return (
     

        <div className="signin">
        <form
          onSubmit={handleSubmit}
          className = "max-w-sm w-full   background-[rgba(255, 255, 255, 0.1)]  rounded p-10 shadow"
        >
          <h1 className="text-xl font-bold text-slate-950 mb-6">SignIn</h1>

          <input
            onChange={handleChange}
            className="w-full rounded border p-2 mb-3 border-cyan-400"
            name="email"
            value={formData.email}
            placeholder="Email"
            type="email"
            required
          />

          <input
            className="w-full rounded border p-2 mb-3 border-cyan-400"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Password"
            type="password"
            required
          />
          <button
            type="submit"
            className="w-full rounded   bg-cyan-400 mt-2  font-semibold p-2 text-white  cursor-pointer uppercase hover:bg-cyan-500"
          >
            login
          </button>
        </form>
        </div>
       
     
    );
} 

export default SignIn;















/* Sign in */

// position: relative;
// width: 1310px;
// height: 766px;



/* Rectangle 1932 */

// position: absolute;
// left: 49.54%;
// right: 5.57%;
// top: 15.4%;
// bottom: 10.7%;

// background: rgba(255, 255, 255, 0.5);
// backdrop-filter: blur(10px);
// /* Note: backdrop-filter has minimal browser support */
// border-radius: 20px;
