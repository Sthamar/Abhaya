/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet.heat';
import 'leaflet/dist/leaflet.css';

export default function LeafletHeatmap() {
  // hold a single map instance
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) return;         

    const map = L.map('leaflet-map').setView([27.7172, 85.324], 12);
    mapRef.current = map;                 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const heatData: [number, number, number?][] = [
      [27.7172, 85.324, 0.8],
      [27.72,   85.32,  0.7],
      [27.74,   85.35,  0.5],
    ];

    (L as any).heatLayer(heatData, {
      radius: 25,
      blur: 15,
      maxZoom: 17,
    }).addTo(map);
  }, []);

  return (
    
    <div id="leaflet-map" style={{ height: '60vh', width: '100%' }} />
  );
}
