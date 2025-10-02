import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoveLetterPage() {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffe6f0 0%, #d9f0ff 100%)",
        padding: "2rem",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#e91e63", marginBottom: "2rem" }}>
        💌 A Special Letter for You
      </h1>

      <div
        style={{
          width: "320px",
          height: opened ? "400px" : "60px",
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          transition: "height 0.6s ease",
          overflow: "hidden",
          padding: opened ? "2rem" : "0",
          cursor: opened ? "default" : "pointer",
        }}
        onClick={() => !opened && setOpened(true)}
      >
        {opened ? (
          <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
            <p style={{ fontSize: "1.2rem", color: "#555", lineHeight: "1.5rem" }}>
              The most awkward birthday present you ever got? 😂<br/><br/>
            </p>
            <button
              onClick={() => navigate("/map")}
              style={{
                padding: "1rem 2rem",
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: "16px",
                cursor: "pointer",
                fontWeight: "bold",
                marginTop: "1rem",
              }}
            >
              Show Me Where We’re Going
            </button>
          </div>
        ) : (
          <p style={{ lineHeight: "60px", fontSize: "1.2rem", color: "#e91e63", fontWeight: "bold" }}>
            Click to open your letter 💖
          </p>
        )}
      </div>
    </div>
  );
}
