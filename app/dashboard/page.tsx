"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const GLOBAL_STATS = [
  { value: "12,450", suffix: "kg", label: "Food Rescued", color: "var(--primary)", icon: "fa-solid fa-leaf", trend: "+2.3%" },
  { value: "49,800", suffix: "", label: "Meals Provided", color: "var(--secondary)", icon: "fa-solid fa-bowl-rice", trend: "+5.1%" },
  { value: "18.5", suffix: "t", label: "CO₂ Reduced", color: "var(--blue)", icon: "fa-solid fa-wind", trend: "+1.8%" },
  { value: "87", suffix: "+", label: "Active Partners", color: "#c084fc", icon: "fa-solid fa-handshake", trend: "+3 this month" },
];

const NGO_RESCUES = [
  { id: 1, date: "2024-05-01", item: "Veg Thali Set", qty: "20 units", status: "Completed", from: "Haldiram's" },
  { id: 2, date: "2024-05-03", item: "Bread Loaves", qty: "5 kg", status: "In Transit", from: "Subway" },
  { id: 3, date: "2024-05-05", item: "Pizza Slices", qty: "30 units", status: "Pending", from: "Domino's" },
  { id: 4, date: "2024-05-06", item: "Burger Meals", qty: "15 units", status: "Completed", from: "Burger King" },
];

const RESTAURANT_POSTINGS = [
  { id: 1, date: "2024-05-06", item: "Unsold Biryani", qty: "8 kg", status: "Available", expires: "8h left" },
  { id: 2, date: "2024-05-06", item: "Naan & Dal", qty: "3 kg", status: "Claimed", expires: "Claimed" },
  { id: 3, date: "2024-05-05", item: "Fresh Salads", qty: "4 kg", status: "Available", expires: "3h left" },
];

const MONTHLY_DATA = [60, 45, 80, 55, 90, 75, 95, 70, 85, 65, 88, 92];
const MONTH_LABELS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { bg: string; color: string; icon: string }> = {
    Completed:   { bg: "rgba(16,185,129,0.12)",  color: "var(--primary)",  icon: "fa-solid fa-check" },
    "In Transit":{ bg: "rgba(251,191,36,0.12)",  color: "var(--secondary)", icon: "fa-solid fa-truck" },
    Pending:     { bg: "rgba(96,165,250,0.12)",  color: "var(--blue)",     icon: "fa-solid fa-clock" },
    Available:   { bg: "rgba(16,185,129,0.12)",  color: "var(--primary)",  icon: "fa-solid fa-circle-check" },
    Claimed:     { bg: "rgba(148,163,184,0.12)", color: "var(--text-muted)", icon: "fa-solid fa-lock" },
  };
  const s = map[status] || map["Pending"];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        padding: "4px 10px",
        borderRadius: "99px",
        background: s.bg,
        color: s.color,
        fontSize: "0.75rem",
        fontWeight: 600,
        border: `1px solid ${s.color}30`,
        whiteSpace: "nowrap",
      }}
    >
      <i className={s.icon} style={{ fontSize: "0.65rem" }} />
      {status}
    </span>
  );
}

export default function DashboardPage() {
  const [role, setRole] = useState<"Restaurant" | "NGO">("NGO");
  const [liveFood, setLiveFood] = useState(12450);
  const [liveMeals, setLiveMeals] = useState(49800);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveFood((p) => p + Math.floor(Math.random() * 2));
      setLiveMeals((p) => p + Math.floor(Math.random() * 5));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const maxBar = Math.max(...MONTHLY_DATA);

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh", paddingTop: "100px", paddingBottom: "6rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>

        {/* Page Header */}
        <div style={{ marginBottom: "3rem" }}>
          <div className="tag tag-green" style={{ marginBottom: "1rem" }}>
            <i className="fa-solid fa-chart-line" />
            Live Impact Data
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "0.75rem" }}>
            Impact <span style={{ color: "var(--primary)", fontStyle: "italic" }}>Dashboard</span>
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
            Real-time metrics from our food rescue network across Ahmedabad.
          </p>
        </div>

        {/* Global Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          {GLOBAL_STATS.map(({ value, suffix, label, color, icon, trend }) => (
            <div
              key={label}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "18px",
                padding: "2rem 1.75rem",
                position: "relative",
                overflow: "hidden",
                transition: "var(--transition)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-hover)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-lg), var(--shadow-glow)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Top accent line */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div
                  style={{
                    width: "42px", height: "42px",
                    borderRadius: "10px",
                    background: `${color}18`,
                    border: `1px solid ${color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <i className={icon} style={{ color, fontSize: "1rem" }} />
                </div>
                <span
                  style={{
                    fontSize: "0.73rem",
                    fontWeight: 600,
                    color: "var(--primary)",
                    background: "rgba(16,185,129,0.1)",
                    padding: "3px 8px",
                    borderRadius: "99px",
                    border: "1px solid rgba(16,185,129,0.2)",
                  }}
                >
                  {trend}
                </span>
              </div>

              <div style={{ fontSize: "2rem", fontWeight: 800, color, fontFamily: "'Inter', sans-serif", letterSpacing: "-0.03em", lineHeight: 1 }}>
                {label === "Food Rescued"
                  ? liveFood.toLocaleString()
                  : label === "Meals Provided"
                  ? liveMeals.toLocaleString()
                  : value}
                {suffix}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "6px", fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Main Grid: Sidebar + Content */}
        <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "1.5rem", alignItems: "start" }}>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Role Toggle */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.5rem",
              }}
            >
              <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-dim)", marginBottom: "1rem" }}>
                View Mode
              </h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "6px",
                  background: "rgba(255,255,255,0.03)",
                  padding: "5px",
                  borderRadius: "10px",
                  border: "1px solid var(--border)",
                }}
              >
                {(["NGO", "Restaurant"] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setRole(r)}
                    style={{
                      padding: "9px 6px",
                      borderRadius: "7px",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: "0.82rem",
                      fontFamily: "'Inter', sans-serif",
                      transition: "var(--transition)",
                      background: role === r ? "linear-gradient(135deg, var(--primary), var(--primary-dark))" : "transparent",
                      color: role === r ? "white" : "var(--text-muted)",
                      boxShadow: role === r ? "0 4px 12px rgba(16,185,129,0.3)" : "none",
                    }}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Your Impact */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.5rem",
              }}
            >
              <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-dim)", marginBottom: "1.25rem" }}>
                {role === "NGO" ? "NGO Impact" : "Restaurant Impact"}
              </h4>

              {[
                { label: "Total Rescued", value: "142 kg", color: "var(--primary)" },
                { label: "Meals Served", value: "568", color: "var(--secondary)" },
                { label: "CO₂ Avoided", value: "0.9 t", color: "var(--blue)" },
              ].map(({ label, value, color }) => (
                <div key={label} style={{ marginBottom: "1.25rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{label}</span>
                    <span style={{ fontSize: "0.9rem", fontWeight: 700, color, fontFamily: "'Inter', sans-serif" }}>{value}</span>
                  </div>
                  <div style={{ height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px" }}>
                    <div
                      style={{
                        width: label === "Total Rescued" ? "65%" : label === "Meals Served" ? "78%" : "42%",
                        height: "100%",
                        background: `linear-gradient(90deg, ${color}, ${color}80)`,
                        borderRadius: "2px",
                        transition: "width 1s ease",
                      }}
                    />
                  </div>
                </div>
              ))}

              <div
                style={{
                  background: "rgba(16,185,129,0.06)",
                  border: "1px solid rgba(16,185,129,0.15)",
                  borderRadius: "10px",
                  padding: "12px",
                  textAlign: "center",
                  marginTop: "0.5rem",
                }}
              >
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "4px" }}>Monthly Goal</div>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary)", fontFamily: "'Inter', sans-serif" }}>65%</div>
                <div style={{ fontSize: "0.73rem", color: "var(--text-dim)" }}>92 kg remaining</div>
              </div>
            </div>

            {/* Monthly Chart */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.5rem",
              }}
            >
              <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-dim)", marginBottom: "1.25rem" }}>
                Monthly Activity
              </h4>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "5px", height: "80px" }}>
                {MONTHLY_DATA.map((val, i) => (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                    <div
                      style={{
                        width: "100%",
                        height: `${(val / maxBar) * 70}px`,
                        background:
                          i === MONTHLY_DATA.length - 1
                            ? "linear-gradient(to top, var(--primary-dark), var(--primary))"
                            : "rgba(16,185,129,0.25)",
                        borderRadius: "3px 3px 0 0",
                        transition: "var(--transition)",
                      }}
                    />
                    <span style={{ fontSize: "0.55rem", color: "var(--text-dim)" }}>{MONTH_LABELS[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div>
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "18px",
                overflow: "hidden",
              }}
            >
              {/* Table Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.5rem 2rem",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", fontWeight: 700 }}>
                  {role === "NGO" ? "My Rescue Operations" : "Surplus Postings"}
                </h3>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)", animation: "pulse-ring 1.5s infinite" }} />
                    <span style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 600 }}>Live</span>
                  </div>
                  {role === "Restaurant" && (
                    <button className="donate-btn" style={{ fontSize: "0.8rem", padding: "8px 18px" }}>
                      <i className="fa-solid fa-plus" style={{ marginRight: "5px" }} />
                      Post Surplus
                    </button>
                  )}
                </div>
              </div>

              {/* Table */}
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "rgba(255,255,255,0.02)" }}>
                      {role === "NGO"
                        ? ["Date", "Item", "From", "Quantity", "Status"].map((h) => (
                            <th
                              key={h}
                              style={{
                                padding: "12px 20px",
                                textAlign: "left",
                                fontSize: "0.72rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                color: "var(--text-dim)",
                                fontWeight: 700,
                                borderBottom: "1px solid var(--border)",
                              }}
                            >
                              {h}
                            </th>
                          ))
                        : ["Date", "Item", "Quantity", "Status", "Expires"].map((h) => (
                            <th
                              key={h}
                              style={{
                                padding: "12px 20px",
                                textAlign: "left",
                                fontSize: "0.72rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                color: "var(--text-dim)",
                                fontWeight: 700,
                                borderBottom: "1px solid var(--border)",
                              }}
                            >
                              {h}
                            </th>
                          ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(role === "NGO" ? NGO_RESCUES : RESTAURANT_POSTINGS).map((row) => (
                      <tr
                        key={row.id}
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", transition: "var(--transition)" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLTableRowElement).style.background = "rgba(255,255,255,0.02)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLTableRowElement).style.background = "transparent"; }}
                      >
                        <td style={{ padding: "16px 20px", fontSize: "0.85rem", color: "var(--text-muted)" }}>{row.date}</td>
                        <td style={{ padding: "16px 20px", fontSize: "0.88rem", color: "var(--text-main)", fontWeight: 500 }}>{row.item}</td>
                        {role === "NGO" && "from" in row && (
                          <td style={{ padding: "16px 20px", fontSize: "0.85rem", color: "var(--text-muted)" }}>{row.from}</td>
                        )}
                        <td style={{ padding: "16px 20px", fontSize: "0.85rem", color: "var(--text-muted)" }}>{row.qty}</td>
                        <td style={{ padding: "16px 20px" }}><StatusBadge status={row.status} /></td>
                        {role === "Restaurant" && "expires" in row && (
                          <td style={{ padding: "16px 20px", fontSize: "0.82rem", color: row.expires === "Claimed" ? "var(--text-dim)" : "var(--secondary)", fontWeight: 500 }}>
                            {row.expires !== "Claimed" && <i className="fa-regular fa-clock" style={{ marginRight: "5px" }} />}
                            {row.expires}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer actions */}
              <div
                style={{
                  padding: "1.25rem 2rem",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "0.82rem", color: "var(--text-dim)" }}>
                  Showing {role === "NGO" ? NGO_RESCUES.length : RESTAURANT_POSTINGS.length} records
                </span>
                <button
                  style={{
                    background: "none",
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                    padding: "8px 18px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "0.82rem",
                    fontFamily: "'Inter', sans-serif",
                    transition: "var(--transition)",
                  }}
                >
                  View All Records
                </button>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              style={{
                marginTop: "1.5rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "18px",
                padding: "1.5rem 2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <div>
                <h4 style={{ fontFamily: "'Inter', sans-serif", marginBottom: "4px" }}>Live Rescue Map</h4>
                <p style={{ color: "var(--text-dim)", fontSize: "0.85rem" }}>See real-time food transfers across Ahmedabad</p>
              </div>
              <Link href="/">
                <button className="btn-secondary" style={{ fontSize: "0.85rem", padding: "10px 22px" }}>
                  <i className="fa-solid fa-map-location-dot" style={{ marginRight: "8px" }} />
                  Open Map
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Responsive styles */}
        <style>{`
          @media (max-width: 900px) {
            .dashboard-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </div>
  );
}
