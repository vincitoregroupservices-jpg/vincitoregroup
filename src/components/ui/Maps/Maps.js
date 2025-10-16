"use client"; // Required in Next.js 13+ for client-side components

import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const Map = ({ locations }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };

  const center = {
    lat: locations[0].lat,
    lng: locations[0].lng,
  };

  return (
    <LoadScript googleMapsApiKey={'AIzaSyBN2qFNJ0-UmKvirKRifJe66W6Wgmp5CMM'}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {locations.map((loc, index) => (
          <Marker key={index} position={{ lat: loc.lat, lng: loc.lng }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
