import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MapView from '../components/MapView';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Favourites() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  const displayFavLocation = async () => {
    try {
      const response = await fetch('http://localhost:3000/favorites', {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Something went wrong");
      }

      const data = await response.json();
      setFavorites(data);
    } catch (err) {
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
  };

  useEffect(() => {
    displayFavLocation();
  }, []);

  const deleteFavLocation = async (favoriteId) => {
    try {
      const response = await fetch(`http://localhost:3000/favorites/${favoriteId}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setFavorites(prev => prev.filter(fav => fav._id !== favoriteId));
      toast.success(data.message || "Deleted successfully", {
        position: "top-center",
        autoClose: 3000,
      });

    } catch (err) {
      toast.error(err.message,{
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="space-y-6 px-4 pb-10 pt-4">
      {/* Toast container for showing alerts */}
      <ToastContainer />

      {favorites.length === 0 ? (
        <div className="text-center text-gray-500 mt-10 text-lg">
          No transport added.
        </div>
      ) : (
        favorites.map((transport, index) => (
          <div
            key={index}
            className="bg-[#e0dec3] shadow-md p-6 rounded-lg max-w-xl mx-auto"
          >
            <h2 className="text-xl font-semibold mb-4 text-green-600">
              Saved Transport #{index + 1}
            </h2>
            <ul className="mb-4 space-y-2 text-gray-700">
              <li><strong>Name:</strong> {transport.transport?.transportName}</li>
              <li><strong>Pickup Stop:</strong> {transport.pickup.name}</li>
              <li><strong>Dropoff Stop:</strong> {transport.dropoff.name}</li>
              <li><strong>Fare:</strong> Rs {transport.transport?.fare}</li>
              <li><strong>Type:</strong> {transport.transport?.type}</li>
            </ul>

            <MapView pickupStop={transport.pickup} dropoffStop={transport.dropoff} />

            <div className="flex justify-between items-center mt-4">
              <i className="text-gray-500 text-sm">
                Added At: {new Date(transport.addedAt).toLocaleDateString()}
              </i>
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition"
                style={{ width: "15vw" }}
                onClick={() => deleteFavLocation(transport._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Favourites;
