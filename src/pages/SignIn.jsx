import { useState } from "react";


const SignIn = ()=>{
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
    if(formData.email==="admin@example.com" && formData.password==="123456"){
    alert("User Logged successfully.")
    }else{
      alert("Invalid credentials")
    }
    console.log("Form Submitted",formData);
    
      setFormData({
        email:"",
        password:"",
      })
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