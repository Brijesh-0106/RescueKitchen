"use client";
import { useState } from "react";

interface SurplusItem {
  id: string;
  restaurant: string;
  foodType: string;
  quantity: string;
  expiry: string;
  status: "Available" | "Claimed";
  location: string;
  image: string;
}

const initialSurplus: SurplusItem[] = [
  { id: "1", restaurant: "McDonald's", foodType: "Chicken Nuggets & Fries", quantity: "5kg", expiry: "2h 30m", status: "Available", location: "Bodakdev", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },
  { id: "2", restaurant: "Pizza Hut", foodType: "Mixed Veg Pizzas", quantity: "8 units", expiry: "1h 15m", status: "Available", location: "Vastrapur", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80" },
  { id: "3", restaurant: "Domino's", foodType: "Garlic Bread", quantity: "12 units", expiry: "45m", status: "Claimed", location: "Satellite", image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=400&q=80" },
  { id: "4", restaurant: "Local Bakery", foodType: "Assorted Pastries", quantity: "3kg", expiry: "4h", status: "Available", location: "C.G. Road", image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&q=80" },
];

export default function SurplusFeed() {
  const [items, setItems] = useState<SurplusItem[]>(initialSurplus);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleClaim = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, status: "Claimed" } : item
    ));
    alert("Food item claimed! Please coordinate pickup with the restaurant.");
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <div className="tag tag-green" style={{ marginBottom: "1rem", display: "inline-block" }}>
          <i className="fa-solid fa-satellite-dish"></i> Live Updates
        </div>
        <h2 className="sec-title" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>Surplus Marketplace</h2>
        <p className="sec-subtitle">Real-time food rescue opportunities for NGOs. Claim items instantly.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2rem" }}>
        {items.map((item) => {
          const isAvailable = item.status === "Available";
          const isHovered = hoveredId === item.id;
          
          return (
            <div 
              key={item.id} 
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ 
                background: "var(--surface)", 
                borderRadius: "20px", 
                border: "1px solid", 
                borderColor: isHovered ? "var(--primary)" : "var(--border)",
                overflow: "hidden",
                transition: "var(--transition)",
                transform: isHovered ? "translateY(-8px)" : "none",
                boxShadow: isHovered ? "var(--shadow-lg), var(--shadow-glow)" : "var(--shadow-md)"
              }}
            >
              {/* Card Image */}
              <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                <img src={item.image} alt={item.foodType} style={{ width: "100%", height: "100%", objectFit: "cover", filter: isAvailable ? "none" : "grayscale(80%)", transition: "transform 0.5s", transform: isHovered ? "scale(1.05)" : "scale(1)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,24,39,1), transparent)" }} />
                
                {/* Status Badge */}
                <div style={{ position: "absolute", top: "16px", right: "16px", background: isAvailable ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.1)", border: `1px solid ${isAvailable ? "var(--primary)" : "var(--text-muted)"}`, padding: "4px 12px", borderRadius: "99px", color: isAvailable ? "var(--primary)" : "var(--text-muted)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", backdropFilter: "blur(4px)" }}>
                  {item.status}
                </div>
                
                {/* Expiry Badge */}
                {isAvailable && (
                  <div style={{ position: "absolute", bottom: "16px", left: "16px", background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.5)", color: "#fca5a5", padding: "4px 10px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "6px", backdropFilter: "blur(4px)" }}>
                    <i className="fa-regular fa-clock"></i> Expires in: {item.expiry}
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: isAvailable ? "var(--text-main)" : "var(--text-muted)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {item.foodType}
                </h3>
                <p style={{ fontWeight: 600, color: "var(--primary)", fontSize: "0.95rem", marginBottom: "1rem" }}>
                  {item.restaurant}
                </p>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem", background: "rgba(255,255,255,0.03)", padding: "1rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                  <div>
                    <div style={{ fontSize: "0.7rem", textTransform: "uppercase", color: "var(--text-dim)", letterSpacing: "0.05em", marginBottom: "2px" }}>Quantity</div>
                    <div style={{ fontWeight: 700, color: "var(--text-main)" }}>{item.quantity}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", textTransform: "uppercase", color: "var(--text-dim)", letterSpacing: "0.05em", marginBottom: "2px" }}>Location</div>
                    <div style={{ fontWeight: 600, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                      <i className="fa-solid fa-location-dot" style={{ fontSize: "0.8rem" }}></i> {item.location}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => isAvailable && handleClaim(item.id)}
                  disabled={!isAvailable}
                  style={{ 
                    width: "100%", 
                    padding: "14px", 
                    borderRadius: "10px", 
                    fontWeight: 700, 
                    fontSize: "0.9rem",
                    transition: "var(--transition)",
                    cursor: isAvailable ? "pointer" : "not-allowed",
                    border: "none",
                    background: isAvailable ? "linear-gradient(135deg, var(--primary), var(--primary-dark))" : "rgba(255,255,255,0.05)",
                    color: isAvailable ? "white" : "var(--text-dim)",
                    boxShadow: isAvailable ? "0 4px 16px rgba(16,185,129,0.3)" : "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px"
                  }}
                >
                  {isAvailable ? <><i className="fa-solid fa-hand-holding-heart"></i> Claim Surplus</> : <><i className="fa-solid fa-lock"></i> Claimed</>}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
