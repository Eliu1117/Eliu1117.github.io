import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — Computer Science, University of Maryland`;
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
          justifyContent: "space-between",
          background: "#f6f7f8",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#115e59",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#115e59",
              color: "white",
              fontSize: 16,
              letterSpacing: "-0.04em",
            }}
          >
            {site.initials}
          </div>
          University of Maryland · Class of 2028
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 650,
              letterSpacing: "-0.05em",
              color: "#18181b",
              lineHeight: 1,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              maxWidth: 900,
              fontSize: 28,
              lineHeight: 1.35,
              color: "#3f3f46",
            }}
          >
            CS student seeking Summer 2027 software engineering internships
          </div>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 22, color: "#52525b" }}>
          <span>GPA {site.gpa}</span>
          <span>{site.location}</span>
          <span>github.com/Eliu1117</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
