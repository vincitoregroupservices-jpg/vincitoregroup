// components/GoogleMap.js
"use client";
import { useEffect } from "react";
import Script from "next/script";

export default function GoogleMap({ lat = 23.0225, lng = 72.5714, zoom = 12 }) {
  useEffect(() => {
    // Callback function for Google Maps
    window.initMap = function () {
      const location = { lat, lng };
      const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: zoom,
      });
      new google.maps.Marker({
        position: location,
        map: map,
      });
    };
  }, [lat, lng, zoom]);

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA431I90e-p7z7hd18SUvY6Q61-30oGvp4&callback=initMap`}
        strategy="afterInteractive"
      />
    </div>
  );
}
