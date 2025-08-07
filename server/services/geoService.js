const ExpressError = require("../utils/ExpressError");
require('dotenv').config();
const apiKey = process.env.OPEN_CAGE_API_KEY;



// HAVERSINE DISTANCE FUNCTION
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * 
    Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c; // Distance in km
}

// GET COORDINATES FUNCTION
async function getCoordinates(placeName) {
  const url=`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(placeName + ', Karachi, Pakistan')}&key=${apiKey}`
  
  const res = await fetch(url);
  const data = await res.json();
   if (!data.results || data.results.length === 0) {
    throw new ExpressError(400, `Invalid location: "${placeName}"`);
  }

  const result = data.results[0];

 
  return { 
    lat: parseFloat(data.results[0].geometry.lat), 
    lng: parseFloat(data.results[0].geometry.lng) 
  };
}
module.exports = { haversineDistance, getCoordinates };