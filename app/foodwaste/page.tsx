"use client";
import { useState } from "react";
import SurplusFeed from "@/components/SurplusFeed";

const reasons = [
  { icon: "fa-tags", title: "Confusing Labels", desc: "Sell-by, best-by, use-by dates confuse consumers, leading to premature discarding of edible food." },
  { icon: "fa-chart-line", title: "Overproduction", desc: "Unstable markets lead farmers to discard perfectly edible food when demand fluctuates." },
  { icon: "fa-temperature-empty", title: "Inadequate Storage", desc: "Lack of proper climate control causes food to spoil before it ever reaches the table." },
  { icon: "fa-cart-arrow-down", title: "Overbuying", desc: "Poor planning leads to excessive purchasing at stores, resulting in food waste at home." },
];

const solutions = [
  { icon: "fa-list-check", title: "Shop Smart", desc: "Plan meals, make lists, and avoid impulse buying to reduce household waste." },
  { icon: "fa-box-archive", title: "Store Correctly", desc: "Understand optimal storage temperatures to significantly extend the life of your produce." },
  { icon: "fa-hand-holding-heart", title: "Donate Surplus", desc: "Use platforms like RescueKitchen to route excess food to those experiencing food insecurity." },
  { icon: "fa-jar", title: "Preserve Food", desc: "Adopt traditional methods like pickling, canning, and fermenting to save perishables." },
];

const chartData = [
  { country: "USA", retail: 16, outOfHome: 64, household: 59, total: 139 },
  { country: "China", retail: 16, outOfHome: 46, household: 64, total: 126 },
  { country: "India", retail: 16, outOfHome: 28, household: 77, total: 121 },
  { country: "Global", retail: 15, outOfHome: 31, household: 74, total: 120 },
  { country: "Brazil", retail: 16, outOfHome: 28, household: 60, total: 104 },
];

export default function FoodWastePage() {
  const [activeTab, setActiveTab] = useState<"marketplace" | "education">("marketplace");

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={{ position: "relative", paddingTop: "140px", paddingBottom: "4rem", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.1, zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, var(--background) 0%, rgba(8,15,26,0.7) 100%)", zIndex: 0 }} />
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1, padding: "0 5%" }}>
          <div className="tag tag-green" style={{ margin: "0 auto 1.5rem" }}>
            <i className="fa-solid fa-earth-americas"></i> Zero Waste Initiative
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginBottom: "1.5rem" }}>
            The Food <span style={{ color: "var(--primary)", fontStyle: "italic" }}>Marketplace</span>
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "700px", margin: "0 auto 2.5rem" }}>
            Rescue perfectly edible surplus food from top restaurants, or dive into our resources to understand how we can collectively eradicate food waste.
          </p>
          
          <div style={{ justifyContent: "center", gap: "1rem", background: "rgba(255,255,255,0.03)", padding: "8px", borderRadius: "16px", display: "inline-flex", border: "1px solid var(--border)" }}>
            <button 
              onClick={() => setActiveTab("marketplace")}
              style={{ padding: "12px 24px", borderRadius: "12px", border: "none", fontSize: "0.95rem", fontWeight: 600, cursor: "pointer", transition: "var(--transition)", background: activeTab === "marketplace" ? "linear-gradient(135deg, var(--primary), var(--primary-dark))" : "transparent", color: activeTab === "marketplace" ? "white" : "var(--text-muted)", boxShadow: activeTab === "marketplace" ? "0 4px 16px rgba(16,185,129,0.3)" : "none" }}
            >
              <i className="fa-solid fa-store" style={{ marginRight: "8px" }}></i> Live Marketplace
            </button>
            <button 
              onClick={() => setActiveTab("education")}
              style={{ padding: "12px 24px", borderRadius: "12px", border: "none", fontSize: "0.95rem", fontWeight: 600, cursor: "pointer", transition: "var(--transition)", background: activeTab === "education" ? "linear-gradient(135deg, var(--primary), var(--primary-dark))" : "transparent", color: activeTab === "education" ? "white" : "var(--text-muted)", boxShadow: activeTab === "education" ? "0 4px 16px rgba(16,185,129,0.3)" : "none" }}
            >
              <i className="fa-solid fa-book-open" style={{ marginRight: "8px" }}></i> Waste Education
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Content */}
      <div style={{ paddingBottom: "6rem" }}>
        {activeTab === "marketplace" ? (
          <div style={{ animation: "fadeIn 0.5s ease" }}>
            <SurplusFeed />
          </div>
        ) : (
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%", animation: "fadeIn 0.5s ease" }}>
            {/* Definition Section */}
            <div className="glass-card" style={{ padding: "3rem", marginBottom: "4rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
              <div>
                <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>What is <span style={{ color: "var(--primary)" }}>Food Waste?</span></h2>
                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                  In line with the EPA, <strong style={{ color: "var(--text-main)" }}>RescueKitchen</strong> defines food waste as uneaten food and inedible parts going to landfills, combustion, or simply left unharvested.
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                  Our goal is to ensure surplus food reaches its <strong style={{ color: "var(--secondary)" }}>"highest and best use"</strong> — feeding people instead of polluting the planet.
                </p>
              </div>
              <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border)", height: "300px" }}>
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" alt="Fresh Produce" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>

            {/* Reasons and Solutions Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "4rem" }}>
              
              {/* Causes */}
              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(239,68,68,0.1)", color: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center" }}><i className="fa-solid fa-triangle-exclamation"></i></div>
                  Root Causes
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {reasons.map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "1rem" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--text-muted)" }}>
                        <i className={`fa-solid ${item.icon}`}></i>
                      </div>
                      <div>
                        <h4 style={{ fontSize: "1.05rem", marginBottom: "4px", color: "var(--text-main)" }}>{item.title}</h4>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-dim)", lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(16,185,129,0.1)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}><i className="fa-solid fa-lightbulb"></i></div>
                  Real Solutions
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {solutions.map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "1rem" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--primary)" }}>
                        <i className={`fa-solid ${item.icon}`}></i>
                      </div>
                      <div>
                        <h4 style={{ fontSize: "1.05rem", marginBottom: "4px", color: "var(--text-main)" }}>{item.title}</h4>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-dim)", lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Stats Chart */}
            <div className="glass-card" style={{ padding: "3rem" }}>
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Global Food Waste per Capita <span style={{ color: "var(--text-muted)", fontSize: "1rem" }}>(2023)</span></h3>
                <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "6px" }}><div style={{ width: "12px", height: "12px", borderRadius: "3px", background: "var(--primary)" }}></div> Retail</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "6px" }}><div style={{ width: "12px", height: "12px", borderRadius: "3px", background: "#ef4444" }}></div> Out-of-home</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "6px" }}><div style={{ width: "12px", height: "12px", borderRadius: "3px", background: "var(--blue)" }}></div> Household</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", height: "300px", padding: "0 2rem", gap: "1rem" }}>
                {chartData.map((data, i) => {
                  const maxTotal = 150; // Reference max for scaling
                  const scale = 250 / maxTotal;
                  return (
                    <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, group: "true", position: "relative" }}>
                      <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "8px" }}>{data.total}kg</div>
                      
                      <div style={{ width: "100%", maxWidth: "60px", display: "flex", flexDirection: "column", borderRadius: "8px 8px 0 0", overflow: "hidden", border: "1px solid var(--border)", borderBottom: "none", transition: "transform 0.3s", cursor: "pointer" }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"} onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                        <div style={{ height: data.household * scale, background: "var(--blue)", width: "100%", transition: "height 1s ease-out" }} />
                        <div style={{ height: data.outOfHome * scale, background: "#ef4444", width: "100%", transition: "height 1s ease-out" }} />
                        <div style={{ height: data.retail * scale, background: "var(--primary)", width: "100%", transition: "height 1s ease-out" }} />
                      </div>
                      
                      <div style={{ marginTop: "1rem", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-muted)" }}>
                        {data.country}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .glass-card { grid-template-columns: 1fr !important; }
          div[style*="gridTemplateColumns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
