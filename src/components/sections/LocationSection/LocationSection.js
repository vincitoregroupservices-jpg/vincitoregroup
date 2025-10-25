"use client";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button/Button";
import Section from "@/components/ui/Section/Section";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import projectData from "@/data/projectData";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom red marker icon
const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const LocationSection = ({ title, CTABtn }) => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [showIframe, setShowIframe] = useState(false);
  const mapRef = useRef(null);

  // Fix for default marker icon issue in Next.js
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });

  const containerStyle = {
    width: "100%",
    height: "600px",
  };

  const topLat = 23.1;
  const bottomLat = 22.9;
  const centerLat = (topLat + bottomLat) / 2;
  const centerLng = 72.67712469815;

  const handleGetLocation = (lat, lng) => {
    if (mapRef.current) {
      mapRef.current.setView([lat, lng], 14);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const L = require("leaflet");
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    }
  }, []);

  const handleLocationClick = (locationEmbed) => {
    setCurrentLocation(locationEmbed);
    setShowIframe(true);
  };

  return (
    <Section>
      <SectionTitle text={title} />
      <div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          <div className="flex flex-col gap-4 w-full md:w-1/2 h-[500px] overflow-y-auto pr-2 snap-y snap-mandatory">
            {projectData.map((loc, index) => (
              <div
                key={index}
                onClick={() => handleLocationClick(loc.locationEmbed)}
                className="flex gap-5 bg-gold-lighter p-3.5 rounded-lg cursor-pointer snap-start"
              >
                <Image
                  src={`${loc.thumbnail}`}
                  alt={loc.title}
                  height={2000}
                  width={2000}
                  className="h-[80px] w-[80px] object-cover rounded-md"
                />
                <div className="flex flex-col text-black-2">
                  <h3 className="text-xl font-semibold">{loc.name}</h3>
                  <div className="text-sm text-gray-700 leading-snug">
                    <p>{loc.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 h-[500px] flex border border-gold-dark rounded-lg flex-col">
            {!showIframe ? (
              <MapContainer
                className="z-1"
                ref={mapRef}
                center={[centerLat, centerLng]}
                zoom={10}
                style={containerStyle}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {projectData.map((site, index) => (
                  <Marker
                    className="z-0"
                    key={index}
                    position={[site.coordinates.lat, site.coordinates.lng]}
                    icon={redIcon}
                  >
                    <Popup>
                      <div>
                        <h3 className="font-semibold">{site.name}</h3>
                        <Link
                          href={site.locationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.preventDefault();
                            handleLocationClick(site.locationEmbed);
                          }}
                        >
                          <button className="mt-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Get Location
                          </button>
                        </Link>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            ) : (
              <iframe
                src={
                  currentLocation ||
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.7623603978586!2d72.67779847477154!3d23.06917231458857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87ff196f3299%3A0x2d473d0c76111f6e!2sVincitore%20Sky!5e0!3m2!1sen!2sin!4v1756989179642!5m2!1sen!2sin"
                }
                className="w-full rounded-lg flex-1 md:aspect-auto"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
            <div className="flex sm:hidden flex-wrap justify-center py-5 gap-3">
              {projectData.map((loc, index) => (
                <div
                  key={index}
                  className="px-3 py-2 text-lg bg-gold-lighter-2 rounded"
                  onClick={() => handleLocationClick(loc.locationEmbed)}
                >
                  {loc.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {CTABtn && (
        <Link href="/territory" className="flex justify-center">
          <Button text="Explore All Locations" />
        </Link>
      )}
    </Section>
  );
};

export default LocationSection;
