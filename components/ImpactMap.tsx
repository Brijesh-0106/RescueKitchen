"use client";
import { useState } from "react";

interface Pin {
  id: number;
  top: string;
  left: string;
  label: string;
  from: string;
  to: string;
  type: "completed" | "transit" | "pending";
}

const PINS: Pin[] = [
  { id: 1, top: "28%", left: "38%", label: "McDonald's → NGO Aastha", from: "McDonald's", to: "NGO Aastha", type: "completed" },
  { id: 2, top: "52%", left: "62%", label: "Pizza Hut → NGO Pragati", from: "Pizza Hut", to: "NGO Pragati", type: "transit" },
  { id: 3, top: "68%", left: "28%", label: "Haldiram's → NGO Samarpan", from: "Haldiram's", to: "NGO Samarpan", type: "pending" },
  { id: 4, top: "40%", left: "70%", label: "Domino's → NGO Sevak", from: "Domino's", to: "NGO Sevak", type: "transit" },
  { id: 5, top: "76%", left: "55%", label: "Subway → NGO Asha", from: "Subway", to: "NGO Asha", type: "completed" },
];

const PIN_COLORS: Record<string, string> = {
  completed: "var(--primary)",
  transit: "var(--secondary)",
  pending: "var(--blue)",
};

export default function ImpactMap() {
  const [hoveredPin, setHoveredPin] = useState<number | null>(null);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "480px",
        background: "var(--surface)",
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid var(--border)",
      }}
    >
      {/* Abstract city grid background */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 480"
        style={{ position: "absolute", top: 0, left: 0, opacity: 0.06 }}
      >
        {/* Grid lines */}
        {[...Array(12)].map((_, i) => (
          <line key={`v${i}`} x1={i * 70} y1={0} x2={i * 70} y2={480} stroke="var(--primary)" strokeWidth="0.5" />
        ))}
        {[...Array(8)].map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 70} x2={800} y2={i * 70} stroke="var(--primary)" strokeWidth="0.5" />
        ))}
        {/* City blocks */}
        {[
          [100, 80, 120, 60], [260, 120, 80, 40], [400, 60, 100, 80],
          [550, 100, 90, 50], [680, 80, 80, 60], [150, 220, 100, 50],
          [320, 280, 70, 60], [480, 240, 110, 40], [620, 260, 90, 50],
        ].map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} fill="var(--primary)" rx={4} />
        ))}
      </svg>

      {/* Gradient overlays for depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, rgba(8,15,26,0.5) 100%)",
        }}
      />

      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          left: "1.5rem",
          zIndex: 10,
          background: "rgba(8,15,26,0.85)",
          backdropFilter: "blur(12px)",
          border: "1px solid var(--border)",
          borderRadius: "14px",
          padding: "1rem 1.25rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", animation: "pulse-ring 1.5s infinite" }} />
          <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", fontWeight: 700 }}>
            Live Rescue Activity
          </h3>
        </div>
        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
          Ahmedabad food transfer network
        </p>
      </div>

      {/* Legend */}
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          zIndex: 10,
          background: "rgba(8,15,26,0.85)",
          backdropFilter: "blur(12px)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          padding: "0.875rem 1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {[
          { color: "var(--primary)", label: "Completed" },
          { color: "var(--secondary)", label: "In Transit" },
          { color: "var(--blue)", label: "Pending" },
        ].map(({ color, label }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: color, flexShrink: 0 }} />
            <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Pins */}
      {PINS.map((pin) => {
        const color = PIN_COLORS[pin.type];
        const isHovered = hoveredPin === pin.id;
        return (
          <div
            key={pin.id}
            style={{
              position: "absolute",
              top: pin.top,
              left: pin.left,
              transform: "translate(-50%, -50%)",
              zIndex: 20,
              cursor: "pointer",
            }}
            onMouseEnter={() => setHoveredPin(pin.id)}
            onMouseLeave={() => setHoveredPin(null)}
          >
            {/* Pulse ring */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: color,
                opacity: 0.2,
                animation: "pulse-ring 2s infinite",
              }}
            />
            {/* Dot */}
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: color,
                border: "2px solid rgba(8,15,26,0.8)",
                boxShadow: `0 0 16px ${color}80`,
                transition: "transform 0.2s ease",
                transform: isHovered ? "scale(1.3)" : "scale(1)",
              }}
            />

            {/* Tooltip */}
            {isHovered && (
              <div
                style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(8,15,26,0.95)",
                  border: `1px solid ${color}40`,
                  borderRadius: "10px",
                  padding: "10px 14px",
                  whiteSpace: "nowrap",
                  boxShadow: "var(--shadow-md)",
                  animation: "fadeIn 0.15s ease",
                }}
              >
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "2px" }}>
                  {pin.from}
                </div>
                <div style={{ fontSize: "0.68rem", color: color, display: "flex", alignItems: "center", gap: "4px" }}>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "0.55rem" }} />
                  {pin.to}
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Bottom stat bar */}
      <div
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "1.5rem",
          right: "1.5rem",
          zIndex: 10,
          background: "rgba(8,15,26,0.85)",
          backdropFilter: "blur(12px)",
          border: "1px solid var(--border)",
          borderRadius: "14px",
          padding: "0.875rem 1.25rem",
          display: "flex",
          justifyContent: "space-around",
          gap: "1rem",
        }}
      >
        {[
          { value: "5", label: "Active Routes", color: "var(--primary)" },
          { value: "142 kg", label: "In Transit", color: "var(--secondary)" },
          { value: "< 2h", label: "Avg Delivery", color: "var(--blue)" },
        ].map(({ value, label, color }) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1rem", fontWeight: 800, color, fontFamily: "'Inter', sans-serif" }}>{value}</div>
            <div style={{ fontSize: "0.68rem", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
