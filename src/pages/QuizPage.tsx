import { useState } from "react";
import { useNavigate } from "react-router-dom";

const segments = [
  "You are amazing ❤️",
  "Try again",  
  "Excited?",
  "Surprise! 💌",
];

export default function SpinWheelPage() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const navigate = useNavigate();

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);

    // simulate spinning
    const spinTime = Math.random() * 2000 + 2000; // 2-4 seconds
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * segments.length);
      setResult(segments[randomIndex]);
      setSpinning(false);
    }, spinTime);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffe6f0 0%, #d9f0ff 100%)",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#e91e63", marginBottom: "2rem" }}>
        🎡 Spin the Wheel of Love!
      </h1>

      <div
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "8px solid #e91e63",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "#555",
          background: "#fff",
          position: "relative",
          transform: spinning ? `rotate(${360 + Math.random() * 720}deg)` : "rotate(0deg)",
          transition: "transform 3s ease-out",
        }}
      >
        {result || "Tap Spin!"}
      </div>

      <button
        onClick={spinWheel}
        style={{
          padding: "1rem 2rem",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "16px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1rem",
          marginBottom: "1rem",
        }}
      >
        {spinning ? "Spinning..." : "Spin Wheel!"}
      </button>

      {result && (
        <button
          onClick={() => navigate("/love-letter")}
          style={{
            padding: "1rem 2rem",
            backgroundColor: "#e91e63",
            color: "white",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Continue Adventure
        </button>
      )}
    </div>
  );
}
