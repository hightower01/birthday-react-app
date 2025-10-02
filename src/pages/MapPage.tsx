import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MapPage() {
  const navigate = useNavigate();
  const [zoom, setZoom] = useState(4); // Start far away
  const destination = { lat: 46.739144, lng: 11.958915 }; // Kronplatz coordinates

  useEffect(() => {
    const interval = setInterval(() => {
      setZoom((z) => {
        if (z >= 12) {
          clearInterval(interval);
          return 12;
        }
        return z + 0.1; // slowly zoom in
      });
    }, 100); // every 100ms
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#e91e63", marginBottom: "2rem" }}>
        🗺️ Zooming Into Our Adventure
      </h1>

      <div style={{ width: "90%", height: "400px", marginBottom: "2rem" }}>
        <LoadScript googleMapsApiKey={import.meta.env.GOOGLE_MAPS_API_KEY || ""}>
          <GoogleMap
            center={destination}
            zoom={zoom}
            mapContainerStyle={{ width: "100%", height: "100%", borderRadius: "16px" }}
          ></GoogleMap>
        </LoadScript>
      </div>

      {zoom >= 12 && (
        <button
          onClick={() => navigate("/final-reveal")}
          style={{
            padding: "1rem 2rem",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Reveal Our Adventure 🎿
        </button>
      )}
    </div>
  );
}
