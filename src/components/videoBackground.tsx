import React from "react";
import "../App.css"

// Definición de tipos para las opciones del reproductor de YouTube
interface VideoBackgroundProps {
    children?: React.ReactNode;
    }

const VideoBackground: React.FC<VideoBackgroundProps> = ({ children }) => {
    return (
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          height: "100vh",
          width: "100vw",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
            filter: "brightness(0.5) blur(2px)",
          }}
        >
          <source src="../../src/assets/Bandera.mp4" type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
        {children}
      </div>
    );
}

export default VideoBackground;