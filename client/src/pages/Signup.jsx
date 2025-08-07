import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
const [username,setUsername]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(username,email,password)
    setUsername("");
    setEmail("");
    setPassword("")
    
  };

let addUser=async(username,email,password)=>{
const userObj={username:username,email:email,password:password}
try{
 const response= await fetch("http://localhost:3000/signup",{
        method:'POST',
         headers: { "Content-Type": "application/json" },
          credentials:'include',
         body:JSON.stringify(userObj)
       })
         if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Something went wrong");
    }
    const data = await response.json()

 toast.success(data.message || "Signup and Login successful!", {
        position: "top-center",
        autoClose: 3000,
      });
        setTimeout(() => {
        navigate("/");
      }, 1500);

    

}catch(err){
  toast.error(err.message, {
         position: "top-center",
         autoClose: 3000,
       });
}
 
    

        
    }



  return (
    
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] space-y-6 px-4 text-center">
        <ToastContainer />
      <form onSubmit={handleSubmit} className="bg-[#1e1e1e] p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold text-white text-center">Sign Up</h2>

        <div>
          <label htmlFor="username" className="block text-gray-300 mb-1">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#2c2c2c] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#2c2c2c] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-300 mb-1">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#2c2c2c] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
