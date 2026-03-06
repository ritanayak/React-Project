import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapView({ data, children }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map', { scrollWheelZoom: false }).setView([0, 0], 2);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapRef.current);
    }

    if (data) {
      const { lat, lng } = data.location;
      mapRef.current.setView([lat, lng], 13);

      L.marker([lat, lng]).addTo(mapRef.current);
    }
  }, [data]);

  return (
    <div id="map">
      {children && children} {/* Optional children inside the map container */}
    </div>
  );
}