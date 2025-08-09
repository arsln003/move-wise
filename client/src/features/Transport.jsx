import React, { useState } from 'react'
import SearchBox from '../components/SearchBox'
import Display from '../components/Display'
import { useNavigate } from "react-router-dom";
import bus from '../assets/bus.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Transport() {
   const [location,setLocation]=useState({pickup:"",dropoff:""})
  const [result,setResult]=useState(null)
 const navigate = useNavigate();


let addTransport=async(pick,drop)=>{
const locationObj={pickup:pick,dropoff:drop}
setLocation(locationObj)

try{
 const response= await fetch("http://localhost:3000/demo",{
        method:'POST',
         headers: { "Content-Type": "application/json" },
           credentials: 'include',
         body:JSON.stringify(locationObj)
       })
         if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Something went wrong");
    }

    const data = await response.json()
    setResult(data)

}catch(err){
   if (err.message === "You must be logged in") {
    toast.error(err.message,{
            position: "top-center",
            autoClose: 3000,
          }); 
  
      setTimeout(() => {
        navigate("/login");
      }, 1500);
  } else {
    toast.error(err.message,{
            position: "top-center",
            autoClose: 3000,
          }); 
  }
}
 
    

        
    }
return (

  <div className="flex flex-col items-center justify-center -translate-y-25 min-h-[calc(100vh-5rem)] space-y-6 px-4 text-center">
    <ToastContainer/>
    <img 
      src={bus} 
      alt="Bus icon" 
      className="w-[250px] h-[250px] object-contain"
    />

    <SearchBox addTransport={addTransport} />

    {result && (
      <div className="w-full max-w-5xl rounded-lg shadow-lg p-4 overflow-auto">
        <Display data={result} />
      </div>
    )}
  </div>
)


}

export default Transport
