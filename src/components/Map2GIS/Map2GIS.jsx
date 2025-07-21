import { useEffect, useRef } from "react";

export const Map2GIS = ({ marker }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.DG) return;

    window.DG.then(function () {
      const map = window.DG.map(mapRef.current, {
        center: marker,
        zoom: 13,
      });

      window.DG.marker(marker).addTo(map);
    });
  }, []);

  return (
    <div
      ref={mapRef}
      id="map"
      style={{ width: "100%", height: "500px", borderRadius: "8px" }}
    />
  );
};
