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
      <form 
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto  bg-slate-200  mt-20 rounded p-10">
        <h1 className="text-xl font-bold text-blue-600 mb-6">SignIn</h1>
        
        <input
        onChange={handleChange}
          className="w-full rounded border p-2 mb-3 border-blue-500"
          name="email"
          value={formData.email}
          placeholder="Email"
          type="email"
          required
        />
       
        <input
          className="w-full rounded border p-2 mb-3 border-blue-500"
          name="password"
          onChange={handleChange}
          value={formData.password}
          placeholder="Password"
          type="password"
          required
        />
        <button
          type="submit"
          className="w-full rounded   bg-blue-600 mt-2 p-2 text-white  cursor-pointer uppercase hover:bg-blue-700"
        >
         login
        </button>
      </form>
    );
}

export default SignIn;















