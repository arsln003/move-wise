const stopNames = [
  "bufferzone",
  
];

async function getGeocodeForStops(stopNames) {
  require('dotenv').config();
const apiKey = process.env.API_KEY;

  const results = [];

  for (const name of stopNames) {
    const address = `${name}, Karachi, Pakistan`;
    const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "OK" && data.results.length > 0) {
        const location = data.results[0].geometry.location;
        results.push({
          name,
          lat: location.lat,
          lng: location.lng
        });
      } else {
        console.warn(`No result for: ${name}`);
      }

      // Optional delay to avoid rate limits
      await new Promise(res => setTimeout(res, 1000));

    } catch (err) {
      console.error(`Error fetching for ${name}:`, err.message);
    }
  }

  console.log("Stops with coordinates:", results);
  return results;
}

getGeocodeForStops(stopNames);
