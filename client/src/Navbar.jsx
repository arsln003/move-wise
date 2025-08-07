import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('http://localhost:3000/check-auth', {
          method: 'GET',
          credentials: 'include',
        });
        const data = await res.json();
        setIsAuthenticated(data.authenticated);
      } catch (err) {
        console.error("Auth check failed:", err);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [location]); 


  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:3000/logout", {
        method: 'GET',
        credentials: 'include',
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || 'Logout failed');
      }

      const data = await res.json();
      console.log(data.message);
      toast.success(data.message, {
             position: "top-center",
             autoClose: 3000,
           });
      setIsAuthenticated(false); 
       setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      toast.error(err.message, {
             position: "top-center",
             autoClose: 3000,
           });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-red-600 text-white px-6 py-4 shadow-md z-50">
        <ToastContainer />
      <div className="max-w-7xl mx-auto flex items-center justify-between">
      <Link to="/">  <div className="text-xl font-bold"><i>MoveWice</i></div></Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/favorites" className="hover:underline">Favorites</Link>

          {!loading && !isAuthenticated && (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/signup" className="hover:underline">SignUp</Link>
            </>
          )}

          {!loading && isAuthenticated && (
            <button onClick={handleLogout} className="hover:underline focus:outline-none">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
