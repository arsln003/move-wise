import React from 'react'
import MapView from './MapView'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Display({ data }) {
  console.log(data)
  const transports = data.nearbyTransports;
const addLocation=async(pickup,dropoff,transportId)=>{
try{
 const response= await fetch("http://localhost:3000/addLocation",{
        method:'POST',
         headers: { "Content-Type": "application/json" },
           credentials: 'include',
         body:JSON.stringify({pickup,dropoff,transport: transportId})
       })
         if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Something went wrong");
    }

    const data = await response.json()
    console.log(data)
     toast.success(data.message, {
            position: "top-center",
            autoClose: 3000,
          });
    
        
    

}catch(err){
   if (err.message === "You must be logged in") {
     toast.error(err.message, {
            position: "top-center",
            autoClose: 3000,
          });
    
  } else {
      toast.error(err.message, {
             position: "top-center",
             autoClose: 3000,
           });
  }
}

}
  return (
    <div className="space-y-6">
        <ToastContainer/>
      {transports.map((transport, index) => (
        <div
          key={index}
          className="bg-[#e0dec3] shadow-md p-6 rounded-lg max-w-xl mx-auto"
        >
          <h2 className="text-xl font-semibold mb-4 text-green-600">
            Best Matched Transport #{index + 1}
          </h2>
          <ul className="mb-4 space-y-2 text-gray-700">
            <li><strong>Name:</strong> {transport.transportName}</li>
            <li><strong>Pickup Stop:</strong> {transport.pickupStop.name}</li>
            <li><strong>Dropoff Stop:</strong> {transport.dropoffStop.name}</li>
            <li><strong>Fare:</strong> Rs {transport.fare}</li>
            <li><strong>Type:</strong> {transport.type}</li>
          
          </ul>
          <MapView pickupStop={transport.pickupStop} dropoffStop={transport.dropoffStop} />
          
             <div className="flex justify-end">
  <button
    type="button"
 onClick={() => {addLocation(transport.pickupStop, transport.dropoffStop,transport._id)}}
    className="bg-[red] hover:bg-[#e30000] text-white px-4 py-2 rounded transition"
  >
    <FontAwesomeIcon icon={faHeart} /> Add to favourites
  </button>
</div>

        </div>
       
      ))}
    </div>
  );
}

export default Display;
