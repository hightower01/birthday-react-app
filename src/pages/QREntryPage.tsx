import { useNavigate } from "react-router-dom";

export default function QREntryPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "24px",
          padding: "3rem",
          maxWidth: "400px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#e91e63",
            marginBottom: "1rem",
          }}
        >
          💝 Welcome, Birthday Girl 💝
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "2rem" }}>
          You’ve unlocked something very special. Are you ready to start your adventure? 🎉
        </p>
        <button
          style={{
            padding: "1rem 2rem",
            backgroundColor: "#e91e63",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/countdown")}
        >
          Start Adventure
        </button>
      </div>
    </div>
  );
}
