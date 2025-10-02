import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CountdownPage() {
  const navigate = useNavigate();
  const targetDate = new Date("2025-10-04T09:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const total = targetDate.getTime() - new Date().getTime();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeRemaining()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timerBoxStyle = {
    background: "rgba(255,255,255,0.8)",
    backdropFilter: "blur(4px)",
    padding: "1rem 1.5rem",
    borderRadius: "24px",
    minWidth: "80px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    textAlign: "center" as const,
  };

  const timeValueStyle = { fontSize: "2.5rem", fontWeight: "bold", color: "#7b1fa2" };
  const timeLabelStyle = { fontSize: "0.9rem", color: "#555" };

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
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#9c27b0", marginBottom: "2rem" }}>
        ⏳ Countdown to Your Birthday 🎂
      </h1>

      {timeLeft.total > 0 ? (
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2rem" }}>
          <div style={timerBoxStyle}>
            <p style={timeValueStyle}>{timeLeft.days}</p>
            <p style={timeLabelStyle}>Days</p>
          </div>
          <div style={timerBoxStyle}>
            <p style={timeValueStyle}>{timeLeft.hours}</p>
            <p style={timeLabelStyle}>Hours</p>
          </div>
          <div style={timerBoxStyle}>
            <p style={timeValueStyle}>{timeLeft.minutes}</p>
            <p style={timeLabelStyle}>Minutes</p>
          </div>
          <div style={timerBoxStyle}>
            <p style={timeValueStyle}>{timeLeft.seconds}</p>
            <p style={timeLabelStyle}>Seconds</p>
          </div>
        </div>
      ) : (
        <div>
          <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#4caf50", marginBottom: "2rem" }}>
            🎉 It’s Time! Happy Birthday! 🎉
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
              fontSize: "1rem",
            }}
            onClick={() => navigate("/memory-lane")}
          >
            Continue Adventure
          </button>
        </div>
      )}
    </div>
  );
}
