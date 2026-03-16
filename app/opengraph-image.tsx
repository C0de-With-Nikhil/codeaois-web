import { ImageResponse } from "next/og";

// This tells Next.js what size to make the Twitter/Discord banner
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "CodeAOIS - Multi-Agent Terminal OS";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          border: "4px solid #18181b", // zinc-900 border
        }}
      >
        {/* Background Glow Effect */}
        <div
          style={{
            position: "absolute",
            width: "800px",
            height: "800px",
            background: "rgba(6, 182, 212, 0.15)", // Cyan glow
            borderRadius: "50%",
            filter: "blur(100px)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: 80,
            fontWeight: "bold",
            color: "#ffffff",
            letterSpacing: "-0.05em",
            marginBottom: "20px",
            zIndex: 10,
          }}
        >
          <span style={{ color: "#06b6d4" }}>{">_"}</span>
          CodeAOIS
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 40,
            color: "#a1a1aa", // zinc-400
            fontWeight: "normal",
            textAlign: "center",
            maxWidth: "800px",
            zIndex: 10,
          }}
        >
          Build, debug & deploy with AI.
        </div>
      </div>
    ),
    { ...size }
  );
}