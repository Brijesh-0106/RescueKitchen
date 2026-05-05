"use client";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

const NGOS = [
  {
    name: "Save the Children",
    category: "Child Welfare",
    desc: "Distributes food to underprivileged children and families across Ahmedabad.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=80",
    mealsDelivered: "25,000+",
    since: "2020",
    badge: "Platinum Partner",
    badgeColor: "#c084fc",
  },
  {
    name: "International Rescue Committee",
    category: "Crisis Relief",
    desc: "Provides emergency food assistance and long-term nutritional support to vulnerable populations.",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&auto=format&fit=crop&q=80",
    mealsDelivered: "18,500+",
    since: "2021",
    badge: "Gold Partner",
    badgeColor: "var(--secondary)",
  },
  {
    name: "Care International",
    category: "Community Support",
    desc: "Focuses on empowering women and fighting poverty through sustainable food programs.",
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&auto=format&fit=crop&q=80",
    mealsDelivered: "15,200+",
    since: "2021",
    badge: "Gold Partner",
    badgeColor: "var(--secondary)",
  },
  {
    name: "DirectRelief",
    category: "Medical & Nutritional",
    desc: "Combines medical assistance with nutritional aid to improve overall health outcomes.",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&auto=format&fit=crop&q=80",
    mealsDelivered: "12,000+",
    since: "2022",
    badge: "Silver Partner",
    badgeColor: "var(--text-muted)",
  },
  {
    name: "Robin Hood Army",
    category: "Volunteer Driven",
    desc: "A volunteer-based organization that redistributes surplus food to the less fortunate.",
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&auto=format&fit=crop&q=80",
    mealsDelivered: "40,000+",
    since: "2018",
    badge: "Platinum Partner",
    badgeColor: "#c084fc",
  },
  {
    name: "Akshaya Patra",
    category: "Education & Nutrition",
    desc: "Implements mid-day meal programs in schools to encourage education and eliminate classroom hunger.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80",
    mealsDelivered: "100,000+",
    since: "2015",
    badge: "Platinum Partner",
    badgeColor: "#c084fc",
  },
];

const STATS = [
  { value: "50+", label: "NGO Partners", icon: "fa-solid fa-hand-holding-heart" },
  { value: "500k+", label: "Lives Impacted", icon: "fa-solid fa-users" },
  { value: "100%", label: "Verified Network", icon: "fa-solid fa-shield-check" },
  { value: "24/7", label: "Rescue Operations", icon: "fa-solid fa-clock" },
];

const CATEGORIES = ["All", "Child Welfare", "Crisis Relief", "Community Support", "Volunteer Driven", "Education & Nutrition"];

export default function NgosPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalRecipient, setModalRecipient] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const openModal = (name: string) => {
    setModalRecipient(name);
    setModalOpen(true);
  };

  const filtered = activeCategory === "All" ? NGOS : NGOS.filter((n) => n.category === activeCategory);

  const getBadgeStyle = (color: string) => ({
    background: `${color}18`,
    border: `1px solid ${color}40`,
    color,
    padding: "4px 12px",
    borderRadius: "99px",
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
    backdropFilter: "blur(8px)"
  });

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ position: "relative", paddingTop: "140px", paddingBottom: "5rem", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 70%)", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto", textAlign: "center", padding: "0 5%" }}>
          <div className="tag tag-green" style={{ margin: "0 auto 1.5rem" }}>
            <i className="fa-solid fa-network-wired" />
            Our NGO Network
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1.25rem" }}>
            The Hands That <span style={{ color: "var(--primary)", fontStyle: "italic" }}>Feed</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: "600px", margin: "0 auto" }}>
            We partner with the most dedicated non-profits in Ahmedabad, providing them with reliable surplus food so they can focus on their core mission: helping people.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ padding: "0 8% 6rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
          {STATS.map(({ value, label, icon }) => (
            <div key={label} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2rem", textAlign: "center", transition: "var(--transition)" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                <i className={icon} style={{ color: "var(--primary)", fontSize: "1.2rem" }} />
              </div>
              <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--text-main)", letterSpacing: "-0.03em" }}>{value}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px", fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "3rem", justifyContent: "center" }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "10px 24px",
                borderRadius: "99px",
                border: "1px solid",
                borderColor: activeCategory === cat ? "var(--primary)" : "var(--border)",
                background: activeCategory === cat ? "linear-gradient(135deg, var(--primary), var(--primary-dark))" : "rgba(255,255,255,0.03)",
                color: activeCategory === cat ? "white" : "var(--text-muted)",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "var(--transition)",
                boxShadow: activeCategory === cat ? "0 4px 12px rgba(16,185,129,0.3)" : "none"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* NGOs Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "2rem" }}>
          {filtered.map((ngo) => (
            <div
              key={ngo.name}
              onMouseEnter={() => setHoveredCard(ngo.name)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: "var(--surface)",
                border: "1px solid",
                borderColor: hoveredCard === ngo.name ? "var(--border-hover)" : "var(--border)",
                borderRadius: "24px",
                overflow: "hidden",
                transition: "var(--transition)",
                transform: hoveredCard === ngo.name ? "translateY(-8px)" : "translateY(0)",
                boxShadow: hoveredCard === ngo.name ? "var(--shadow-lg), var(--shadow-glow)" : "var(--shadow-sm)",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                <img
                  src={ngo.img}
                  alt={ngo.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: hoveredCard === ngo.name ? "scale(1.1)" : "scale(1)",
                  }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,15,26,0.9) 0%, transparent 50%)" }} />
                
                {/* Badge */}
                <div style={{ position: "absolute", top: "16px", right: "16px" }}>
                  <span style={getBadgeStyle(ngo.badgeColor)}>{ngo.badge}</span>
                </div>
                
                {/* Category */}
                <div style={{ position: "absolute", bottom: "16px", left: "20px" }}>
                  <span className="tag tag-blue">{ngo.category}</span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1rem" }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-main)" }}>{ngo.name}</h3>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-dim)", fontWeight: 500 }}>Est. {ngo.since}</span>
                </div>

                <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1.5rem", minHeight: "45px" }}>
                  {ngo.desc}
                </p>

                {/* Metrics */}
                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
                  <i className="fa-solid fa-bowl-food" style={{ color: "var(--secondary)", fontSize: "1.2rem" }}></i>
                  <div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-main)" }}>{ngo.mealsDelivered}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Meals Distributed</div>
                  </div>
                </div>

                <button
                  onClick={() => openModal(ngo.name)}
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "12px",
                    border: "none",
                    background: "rgba(16,185,129,0.1)",
                    color: "var(--primary)",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    transition: "var(--transition)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px"
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "var(--primary)";
                    (e.currentTarget as HTMLButtonElement).style.color = "white";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(16,185,129,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(16,185,129,0.1)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--primary)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                  }}
                >
                  <i className="fa-regular fa-envelope" />
                  Connect with {ngo.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{ marginTop: "6rem", background: "linear-gradient(135deg, var(--surface) 0%, rgba(16,185,129,0.05) 100%)", border: "1px solid var(--border)", borderRadius: "24px", padding: "4rem 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", marginBottom: "1rem" }}>Represent an NGO?</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Join our network to access a reliable stream of high-quality surplus food from top restaurants. Zero cost, complete transparency.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="donate-btn" style={{ padding: "16px 36px", fontSize: "1rem" }} onClick={() => openModal("RescueKitchen NGO Onboarding")}>
              <i className="fa-solid fa-file-signature" style={{ marginRight: "8px" }} />
              Apply for Partnership
            </button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={modalOpen} recipient={modalRecipient} onClose={() => setModalOpen(false)} />
    </div>
  );
}
