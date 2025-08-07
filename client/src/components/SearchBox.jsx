
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SearchBox({ addTransport }) {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransport(pickup, dropoff);
    setPickup("");
    setDropoff("");
  };

   const handleUseMyLocation = async () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        // Reverse geocoding with Mapbox API
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`
        );
        const data = await response.json();
        const place = data.features[0]?.place_name;

     if (place) {
  setPickup(place);
  toast.success("Location detected and autofilled!",{
            position: "top-center",
            autoClose: 3000,
          });
} else {
  toast.error("Could not fetch address from location.",{
            position: "top-center",
            autoClose: 3000,
          });
}



      }, (error) => {
        console.error("Geolocation error:", error);
       toast.error("Location access denied.",{
            position: "top-center",
            autoClose: 3000,
          });
      });
    } else {
      toast.error("Geolocation is not supported in this browser.",{
            position: "top-center",
            autoClose: 3000,
          });
    }
  };


  return (
    
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 mb-6">
      <ToastContainer/>
     
      <div className="flex justify-center gap-4 w-full">
        <input
          type="text"
          placeholder="Enter Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          required
          className="border border-gray-300 px-4 py-2 rounded  text-white w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Enter Dropoff Location"
          value={dropoff}
          onChange={(e) => setDropoff(e.target.value)}
          required
          className="border border-gray-300 px-4 py-2 rounded  text-white w-full max-w-xs"
        />
      </div>

     
      <div className="flex justify-center w-full" style={{justifyContent:"revert-layer",gap:"20px"}}>
         <button
        type="button"
        onClick={handleUseMyLocation}
        className="bg-[red] hover:bg-[#e30000] text-white px-4 py-2 rounded transition "
      ><FontAwesomeIcon icon={faLocationCrosshairs} /> Use My Location
      </button>
        <button className="bg-[red] hover:bg-[#e30000] text-white px-6 py-2 rounded transition"
       style={{width:"15vw"}}>
          Search
        </button>
       


      </div>
       
    </form>
    
  );
}

export default SearchBox;
