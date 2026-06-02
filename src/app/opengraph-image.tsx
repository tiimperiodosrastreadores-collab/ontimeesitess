import { ImageResponse } from "next/og";

export const alt = "OnTime Tracker - Plataforma de Rastreamento Veicular";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0F172A 0%, #1e293b 50%, #0F172A 100%)",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(37, 99, 235, 0.2)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#2563EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
          </div>
          <span
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "white",
            }}
          >
            OnTime Tracker
          </span>
        </div>
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            maxWidth: "800px",
            margin: 0,
          }}
        >
          Rastreamento Veicular em Tempo Real
        </h1>
        <p
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            marginTop: "24px",
            maxWidth: "700px",
          }}
        >
          Monitore sua frota com tecnologia GPS avançada
        </p>
      </div>
    ),
    { ...size }
  );
}
