import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/IMG_3378.jpg";
import img2 from "../assets/IMG_3384.jpg";
import img3 from "../assets/IMG_5106.jpg";
import img4 from "../assets/IMG_5341.jpg";
import img5 from "../assets/IMG_5421.jpg";

const memories = [
  { 
    photo: img1, 
    note: "Our very first date 💖" 
  },
  { 
    photo: img2, 
    note: "That amazing trip together ✈️" 
  },
  { 
    photo:img3,
    note: "That hilarious moment 😂" 
  },
    { 
    photo:img4,
    note: "That hilarious moment 😂" 
  },
    { 
    photo:img5,
    note: "That hilarious moment 😂" 
  },
  // Add more memories here
];

export default function MemoryLanePage() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const prevMemory = () => setIndex((i) => (i === 0 ? memories.length - 1 : i - 1));
  const nextMemory = () => setIndex((i) => (i === memories.length - 1 ? 0 : i + 1));

  const current = memories[index];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffe6f0 0%, #d9f0ff 100%)",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#e91e63", marginBottom: "2rem" }}>
        📸 Memory Lane
      </h1>

      <div
        style={{
          background: "white",
          borderRadius: "24px",
          padding: "2rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          maxWidth: "400px",
          width: "100%",
          marginBottom: "2rem",
        }}
      >
        <img
          src={current.photo}
          alt="Memory"
          style={{ width: "100%", borderRadius: "16px", marginBottom: "1rem" }}
        />
        <p style={{ fontSize: "1.2rem", color: "#555" }}>{current.note}</p>
      </div>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <button
          onClick={prevMemory}
          style={{
            padding: "0.8rem 1.5rem",
            backgroundColor: "#e91e63",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
          }}
        >
          ◀️ Previous
        </button>
        <button
          onClick={nextMemory}
          style={{
            padding: "0.8rem 1.5rem",
            backgroundColor: "#e91e63",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
          }}
        >
          Next ▶️
        </button>
      </div>

      {index === memories.length - 1 && (
        <button
          onClick={() => navigate("/quiz")}
          style={{
            padding: "1rem 2rem",
            backgroundColor: "#4caf50",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Continue Adventure
        </button>
      )}
    </div>
  );
}
