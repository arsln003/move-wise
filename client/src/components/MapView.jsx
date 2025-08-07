import React, { useRef, useState } from 'react';
import {useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken= import.meta.env.VITE_MAPBOX_TOKEN;

function MapView({ pickupStop, dropoffStop }) {
  const lat=(pickupStop.lat+dropoffStop.lat)/2
  const lng=(pickupStop.lng+dropoffStop.lng)/2
  const mapRef = useRef(null);
useEffect(() => {
  if (!pickupStop || !dropoffStop) return;

  const map = new mapboxgl.Map({
    container: mapRef.current,
    center: [(pickupStop.lng + dropoffStop.lng) / 2, (pickupStop.lat + dropoffStop.lat) / 2],
    zoom: 11,
  });

  map.on('load', async() => {
    new mapboxgl.Marker({ color: 'red' })
      .setLngLat([pickupStop.lng, pickupStop.lat])
       .setPopup(new mapboxgl.Popup().setText('Pickup Stop'))
      .addTo(map);

    new mapboxgl.Marker({ color: 'red' })
      .setLngLat([dropoffStop.lng, dropoffStop.lat])
      .setPopup(new mapboxgl.Popup().setText('Dropoff Stop'))
      .addTo(map);

    // Fetch Route from Mapbox Directions API
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupStop.lng},${pickupStop.lat};${dropoffStop.lng},${dropoffStop.lat}?geometries=geojson&access_token=${mapboxgl.accessToken}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      const route = data.routes[0].geometry;

      // Add route line
      map.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: route,
        },
      });

      map.addLayer({
        id: 'route-line',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#0074D9',
          'line-width': 4,
        },
      });
    } catch (error) {
      console.error('Error fetching route:', error);
    }

  });
  

  return () => map.remove();
}, [pickupStop, dropoffStop]);
  return (
    <div ref={mapRef} style={{width:'100%', height:'500px'}}/> 
    
  );
}

export default MapView;
