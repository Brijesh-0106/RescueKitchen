"use client";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

const PARTNERS = [
  {
    name: "McDonald's",
    category: "Fast Food",
    desc: "Committed to donating unsold inventory daily — averaging 40kg per location across Ahmedabad.",
    img: "https://images.unsplash.com/photo-1619454016518-697bc231e7cb?w=600&auto=format&fit=crop&q=80",
    meals: "1,200+",
    since: "2022",
    badge: "Platinum",
    badgeColor: "#c084fc",
  },
  {
    name: "Pizza Hut",
    category: "Pizza Chain",
    desc: "Donating unsold pizzas daily, reducing waste while nourishing hundreds of families each week.",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=80",
    meals: "980+",
    since: "2022",
    badge: "Gold",
    badgeColor: "var(--secondary)",
  },
  {
    name: "Domino's",
    category: "Pizza Chain",
    desc: "End-of-day surplus pizzas and sides go directly to nearby NGO partners through our logistics network.",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    meals: "850+",
    since: "2023",
    badge: "Gold",
    badgeColor: "var(--secondary)",
  },
  {
    name: "Burger King",
    category: "Fast Food",
    desc: "Daily donations of unsold burgers and sides, contributing to our lunch program for underprivileged children.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
    meals: "720+",
    since: "2023",
    badge: "Silver",
    badgeColor: "var(--text-muted)",
  },
  {
    name: "Haldiram's",
    category: "Indian Cuisine",
    desc: "Providing traditional Indian meals and sweets to community kitchens across Ahmedabad.",
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&auto=format&fit=crop&q=80",
    meals: "1,500+",
    since: "2021",
    badge: "Platinum",
    badgeColor: "#c084fc",
  },
  {
    name: "Subway",
    category: "Sandwich Chain",
    desc: "Fresh bread and sandwiches donated daily, ensuring nutritious meals reach food-insecure communities.",
    img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&auto=format&fit=crop&q=80",
    meals: "600+",
    since: "2023",
    badge: "Silver",
    badgeColor: "var(--text-muted)",
  },
];

const STATS = [
  { value: "87+", label: "Partner Restaurants", icon: "fa-solid fa-store" },
  { value: "6,000+", label: "Daily Meals Rescued", icon: "fa-solid fa-bowl-rice" },
  { value: "3 yrs", label: "Avg. Partnership Length", icon: "fa-solid fa-calendar-days" },
  { value: "98%", label: "Partner Satisfaction", icon: "fa-solid fa-star" },
];

const CATEGORIES = ["All", "Fast Food", "Pizza Chain", "Indian Cuisine", "Sandwich Chain"];

export default function RestaurantsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalRecipient, setModalRecipient] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const openModal = (name: string) => {
    setModalRecipient(name);
    setModalOpen(true);
  };

  const filtered =
    activeCategory === "All"
      ? PARTNERS
      : PARTNERS.filter((p) => p.category === activeCategory);

  const getBadgeStyle = (color: string) => ({
    background: `${color}18`,
    border: `1px solid ${color}40`,
    color,
    padding: "3px 10px",
    borderRadius: "99px",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
  });

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      {/* Hero */}
      <div
        style={{
          position: "relative",
          paddingTop: "120px",
          paddingBottom: "5rem",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(16,185,129,0.1) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            padding: "0 5%",
          }}
        >
          <div className="tag tag-green" style={{ margin: "0 auto 1.5rem" }}>
            <i className="fa-solid fa-handshake" />
            Our Partner Network
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1.25rem" }}>
            Restaurants Driving{" "}
            <span style={{ color: "var(--primary)", fontStyle: "italic" }}>Real Change</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: "580px", margin: "0 auto" }}>
            Every partner on RescueKitchen is committed to turning surplus food into community nourishment.
            Together, we&apos;re building a zero-waste ecosystem.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ padding: "0 8% 5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          {STATS.map(({ value, label, icon }) => (
            <div
              key={label}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "2rem 1.5rem",
                textAlign: "center",
                transition: "var(--transition)",
              }}
            >
              <i className={icon} style={{ color: "var(--primary)", fontSize: "1.4rem", marginBottom: "0.75rem", display: "block" }} />
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text-main)", fontFamily: "'Inter', sans-serif", letterSpacing: "-0.03em" }}>
                {value}
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.5rem", justifyContent: "center" }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "9px 22px",
                borderRadius: "99px",
                border: "1px solid",
                borderColor: activeCategory === cat ? "var(--primary)" : "var(--border)",
                background:
                  activeCategory === cat
                    ? "rgba(16,185,129,0.12)"
                    : "rgba(255,255,255,0.03)",
                color: activeCategory === cat ? "var(--primary)" : "var(--text-muted)",
                fontWeight: 600,
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "var(--transition)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filtered.map((partner) => (
            <div
              key={partner.name}
              onMouseEnter={() => setHoveredCard(partner.name)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: "var(--surface)",
                border: "1px solid",
                borderColor: hoveredCard === partner.name ? "var(--border-hover)" : "var(--border)",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "var(--transition)",
                transform: hoveredCard === partner.name ? "translateY(-6px)" : "translateY(0)",
                boxShadow: hoveredCard === partner.name
                  ? "var(--shadow-lg), var(--shadow-glow)"
                  : "var(--shadow-sm)",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <img
                  src={partner.img}
                  alt={partner.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    transform: hoveredCard === partner.name ? "scale(1.08)" : "scale(1)",
                  }}
                />
                {/* Overlay gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(8,15,26,0.85) 0%, transparent 60%)",
                  }}
                />

                {/* Badge */}
                <div style={{ position: "absolute", top: "14px", right: "14px" }}>
                  <span style={getBadgeStyle(partner.badgeColor)}>
                    {partner.badge}
                  </span>
                </div>

                {/* Category */}
                <div style={{ position: "absolute", bottom: "14px", left: "14px" }}>
                  <span className="tag tag-green">{partner.category}</span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.15rem", fontWeight: 700 }}>
                    {partner.name}
                  </h3>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>Since {partner.since}</span>
                </div>

                <p style={{ fontSize: "0.87rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                  {partner.desc}
                </p>

                {/* Metrics */}
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    marginBottom: "1.25rem",
                    padding: "0.75rem",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "10px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div style={{ textAlign: "center", flex: 1 }}>
                    <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary)", fontFamily: "'Inter', sans-serif" }}>
                      {partner.meals}
                    </div>
                    <div style={{ fontSize: "0.68rem", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Meals/Mo
                    </div>
                  </div>
                  <div style={{ width: "1px", background: "var(--border)" }} />
                  <div style={{ textAlign: "center", flex: 1 }}>
                    <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--secondary)", fontFamily: "'Inter', sans-serif" }}>
                      Daily
                    </div>
                    <div style={{ fontSize: "0.68rem", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Frequency
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => openModal(partner.name)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid var(--border-hover)",
                    background: "rgba(16,185,129,0.08)",
                    color: "var(--primary)",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    cursor: "pointer",
                    transition: "var(--transition)",
                    fontFamily: "'Inter', sans-serif",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(16,185,129,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(16,185,129,0.08)";
                  }}
                >
                  <i className="fa-solid fa-envelope" />
                  Contact {partner.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          style={{
            marginTop: "5rem",
            background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)",
            border: "1px solid var(--border)",
            borderRadius: "24px",
            padding: "3.5rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50px", right: "-50px",
              width: "200px", height: "200px",
              borderRadius: "50%",
              background: "var(--primary)",
              opacity: 0.05,
              filter: "blur(40px)",
            }}
          />
          <div className="tag tag-green" style={{ margin: "0 auto 1.5rem" }}>
            <i className="fa-solid fa-plus" />
            Become a Partner
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: "1rem" }}>
            Is Your Restaurant Ready to Make a Difference?
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", maxWidth: "500px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
            Join our network and turn your surplus into impact. Zero cost, full logistics support, and a carbon offset certificate included.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className="donate-btn"
              style={{ padding: "14px 32px", fontSize: "0.95rem" }}
              onClick={() => openModal("RescueKitchen Partnership")}
            >
              <i className="fa-solid fa-handshake" style={{ marginRight: "8px" }} />
              Apply to Partner
            </button>
            <button className="btn-secondary" style={{ padding: "14px 32px", fontSize: "0.95rem" }}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={modalOpen} recipient={modalRecipient} onClose={() => setModalOpen(false)} />
    </div>
  );
}
