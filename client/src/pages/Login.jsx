import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  let loginUser = async (username, password) => {
    const userObj = { username, password };
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        credentials: 'include',
        body: JSON.stringify(userObj)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success(data.message || "Login successful!", {
        position: "top-center",
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (err) {
      toast.error(err.message, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(username, password);
    setUsername("");
    setPassword("")
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] space-y-6 px-4 text-center">
      {/* Toast container for showing alerts */}
      <ToastContainer />

      <form onSubmit={handleSubmit} className="bg-[#1e1e1e] p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold text-white text-center">Login</h2>

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
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
