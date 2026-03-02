import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

//Component responsible for updating the map center dynamically whenever coordinates change.
function ChangeView({ center }) {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center, 13);//Update map view
    }
  }, [center, map]);

  return null;
}
//Displays marker only when data is available.
export default function MapView({ data }) {
  const center = data
    ? [data.location.lat, data.location.lng]
    : [0, 0]; // Default world view

  return (
    <MapContainer center={center} zoom={2} style={{ height: "400px" }}>
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data && <Marker position={center} />} {/* Render marker only when data exists */}
      <ChangeView center={center} /> {/* Update map position dynamically */}
    </MapContainer>
  );
}