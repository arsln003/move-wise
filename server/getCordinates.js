const stopNames = [
  "Yousuf Goth",
  "Naval Colony",
  "Baldia",
  "Sher Shah",
  "Gulbai",
  "Agra Taj Colony",
  "Daryabad",
  "Jinnah Bridge",
  "Tower"
]


async function getLatLngForStopsWithOpenCage(stopNames) {
  const apiKey = '7a6f74d4200f495eaa3cf68cb64dbfa8'; // replace with your OpenCage key
  const stopsWithCoordinates = [];

  for (const name of stopNames) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(name + ', Karachi, Pakistan')}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data && data.results && data.results.length > 0) {
        const location = data.results[0].geometry;
        stopsWithCoordinates.push({
          name,
          lat: location.lat,
          lng: location.lng
        });
      } else {
        console.warn(`No data found for: ${name}`);
      }

      // optional: delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));

    } catch (error) {
      console.error(`Error fetching data for ${name}:`, error.message);
    }
  }

  console.log("Stops with coordinates:", stopsWithCoordinates);
  return stopsWithCoordinates;
}

getLatLngForStopsWithOpenCage(stopNames);
