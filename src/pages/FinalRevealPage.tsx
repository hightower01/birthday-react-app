import { useEffect, useState } from "react";

const images = [
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/661997113.jpg?k=fce470a8627b655bd59c8f0c10409e996d0371c27375f4192df7ef7c9fb08c34&o=", // Hotel ANDER
    caption: "Welcome to Hotel ANDER in Bruneck 🏨",
  },
  {
    src: "https://www.kronplatz.com/kronplatz/skirama/winter/skifahren/image-thumb__46571__header/%C2%A9wisthaler.com_24_12_Kronplatz__HW83637~-~media--3f7b0de1--query.webp", // Kronplatz
    caption: "Our skiing adventure at Kronplatz 🎿❄️",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/150089958.jpg?k=bd40ca03941bf45234789a8b91102d49d35e8f9a1513127ab89b875b9262ced1&o=", // Hotel ANDER
    caption: "Welcome to Hotel ANDER in Bruneck 🏨",
  },
];

export default function FinalRevealPage() {
  const [snowflakes, setSnowflakes] = useState<number[]>([]);

  useEffect(() => {
    setSnowflakes(Array.from({ length: 50 }, (_, i) => i));
  }, []);

  return (
    <div
      style={{
        position: "relative",
        overflowY: "scroll",
        height: "100vh",
        background: "linear-gradient(135deg, #d9f0ff 0%, #ffe6f0 100%)",
        scrollSnapType: "y mandatory",
      }}
    >
      {/* Snow */}
      {snowflakes.map((n) => (
        <div
          key={n}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 24 + 12}px`,
            color: "white",
            animation: `fall ${Math.random() * 10 + 5}s linear infinite`,
            pointerEvents: "none",
          }}
        >
          ❄️
        </div>
      ))}


      {/* Scrollable Image Gallery */}
      {images.map((img, idx) => (
        <div
          key={idx}
          style={{
            scrollSnapAlign: "start",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <img
            src={img.src}
            alt={img.caption}
            style={{
              maxWidth: "90%",
              borderRadius: "16px",
              marginBottom: "1rem",
              boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
            }}
          />
          <p
            style={{
              fontSize: "1.5rem",
              color: "#555",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {img.caption}
          </p>
        </div>
      ))}

      {/* Final Birthday Message */}
      <div
        style={{
          scrollSnapAlign: "start",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#e91e63",
            marginBottom: "1rem",
            textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
            textAlign: "center",
          }}
        >
          🎉 Happy Birthday! 🎉
        </h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "#555", textAlign: "center" }}>
          Pack your skis, we’re off to Kronplatz! ❄️⛷️❤️
        </p>
        <button
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
          onClick={() => alert("Let’s go! 🎿")}
        >
          Woohoo! Let’s Go!
        </button>
      </div>
            {/* Vimeo Video Section */}
      <div style={{ scrollSnapAlign: "start", position: "relative", height: "100vh", width: "100%" }}>
        <iframe
          src="https://player.vimeo.com/video/318171523?autoplay=1&hd=1&show_title=1&show_byline=1&show_portrait=0&fullscreen=1"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Kronplatz Ski Resort"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
        ></iframe>
      </div>

      {/* Snow animation keyframes */}
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(-10%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(110vh); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}
