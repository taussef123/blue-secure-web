import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../Context/AuthContext";


const SignUp = () => {
  const navigate =useNavigate()
   const {registerUser,users}  =useAuthContext()
  const [formData,setFormData]=useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
  })
  const handleChange = (e)=>{
     const {name,value } = e.target;
           setFormData({
         ...formData,[name]:value
    })

  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!formData.username || !formData.email || !formData.password || !formData.confirmPassword){
      alert("Please fill out the fields")
      return;
    }
    if(formData.password!==formData.confirmPassword){
      alert("Passwords don't match")
      return;
      
    }
      //  check if email already exist
      const alreadyExists=users.some((u)=>u.email===formData.email)
     if(alreadyExists){
      alert("User already registered with this email")
      return;
     }
      // Register the user
      console.log("Registering user:", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });


      registerUser({
        username:formData.username,
        email:formData.email,
        password:formData.password,
      })
      
      alert("Sign Up successfully")
    setFormData({
      username:"",
      email:"",
      password:"",
      confirmPassword:"",
    })
    navigate("/signin")
    
  } 

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto bg-blue-50 rounded p-6 "
    >
      <h1 className="text-xl font-bold text-blue-500 mb-3">SignUp</h1>
      <input
        onChange={handleChange}
        className="w-full rounded border p-2 border-blue-500  mb-3"
        type="text"
        value={formData.username}
        name="username"
        placeholder="UserName"
      />
      <input
        onChange={handleChange}
        className=" w-full
        rounded
        border
        p-2
        border-blue-500 mb-3 "
        type="email"
        value={formData.email}
        name="email"
        placeholder="Email"
      />
      <input
        onChange={handleChange}
        className=" w-full
        rounded
        border
        p-2  border-blue-500 mb-3"
        type="password"
        name="password"
        value={formData.password}
        placeholder="Password"
      />
      <input
        onChange={handleChange}
        className=" w-full
        rounded
        border
        p-2 border-blue-500 mb-3"
        type="password"
        value={formData.confirmPassword}
        name="confirmPassword"
        placeholder=" Confirm Password"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 p-2 rounded text-white mt-2 hover:bg-blue-700 uppercase mb-3"
      >
        Sign up
      </button>
    </form>
  );
};

export default SignUp;