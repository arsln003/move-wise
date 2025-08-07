
const Transport = require('../models/transport.js'); // Import the Mongoose model

const { haversineDistance, getCoordinates } = require("../services/geoService");

module.exports.searchTransport=async(req,res)=>{
const { pickup, dropoff } = req.body;

    // Get coordinates from LocationIQ
    const pickupCoords = await getCoordinates(pickup);
    const dropoffCoords = await getCoordinates(dropoff);

    const transports = await Transport.find({});
    const nearbyTransports = [];

    transports.forEach((transport) => {
      let nearestPickupStop = null;
      let nearestDropoffStop = null;
      let minPickupDistance = Infinity;
      let minDropoffDistance = Infinity;

      transport.stops.forEach((stop) => {
        const pickupDistance = haversineDistance(
          pickupCoords.lat,
          pickupCoords.lng,
          stop.lat,
          stop.lng
        );
        const dropoffDistance = haversineDistance(
          dropoffCoords.lat,
          dropoffCoords.lng,
          stop.lat,
          stop.lng
        );

        // find nearest pickup stop
        if (pickupDistance < minPickupDistance) {
          minPickupDistance = pickupDistance;
          nearestPickupStop = stop;
        }

        // find nearest dropoff stop
        if (dropoffDistance < minDropoffDistance) {
          minDropoffDistance = dropoffDistance;
          nearestDropoffStop = stop;
        }
      });

      // Only include if both pickup and dropoff stops are nearby (within 1.5 km)

      if (minPickupDistance < 1 && minDropoffDistance < 1) {
        nearbyTransports.push({
            _id: transport._id,
          transportName: transport.transportName,
          type: transport.type,
          fare: transport.fare,
          pickupStop: nearestPickupStop,
          dropoffStop: nearestDropoffStop,
        });
      }
    });

  if (nearbyTransports.length === 0) {
    return res.status(404).json({ message: "No transport found nearby." });
  }


    res.json({
     
      originalPickup: pickup,
      originalDropoff: dropoff,
      nearbyTransports,
    });

}

