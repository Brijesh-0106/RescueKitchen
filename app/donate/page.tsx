"use client";
import { useState, FormEvent } from "react";
import Link from "next/link";

const PRESET_AMOUNTS = ["10", "25", "50", "100", "250", "500"];

const TRUST_BADGES = [
  { icon: "fa-solid fa-shield-halved", label: "256-bit SSL Secure" },
  { icon: "fa-solid fa-certificate", label: "501(c)(3) Non-Profit" },
  { icon: "fa-solid fa-rotate-left", label: "100% Refund Policy" },
];

const IMPACT_STORIES = [
  { name: "Priya M.", location: "Ahmedabad", quote: "Because of RescueKitchen, our shelter now has daily hot meals.", avatar: "PM" },
  { name: "Rahul S.", location: "Gujarat", quote: "Donating $50 monthly means 500 meals. Best investment I make.", avatar: "RS" },
];

export default function DonatePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);

  const effectiveAmount = customAmount || amount;
  const numAmount = parseFloat(effectiveAmount || "0");
  const meals = Math.floor(numAmount * 10);
  const foodSaved = (numAmount * 1.5).toFixed(1);
  const co2 = (numAmount * 2.2).toFixed(1);
  const currSymbol = currency === "INR" ? "₹" : currency === "EUR" ? "€" : "$";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--background)",
          padding: "2rem",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "520px" }}>
          <div
            style={{
              width: "80px", height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 2rem",
              boxShadow: "0 0 48px rgba(16,185,129,0.4)",
              animation: "float 3s ease-in-out infinite",
            }}
          >
            <i className="fa-solid fa-check" style={{ fontSize: "2rem", color: "white" }} />
          </div>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Thank You, {name || "Friend"}!</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            Your donation of <strong style={{ color: "var(--primary)" }}>{currSymbol}{effectiveAmount}</strong> will provide approximately
            <strong style={{ color: "var(--secondary)" }}> {meals} meals</strong> to families in need. A confirmation has been sent to your email.
          </p>
          <Link href="/">
            <button className="donate-btn" style={{ padding: "14px 36px", fontSize: "1rem" }}>
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          paddingTop: "120px",
          paddingBottom: "6rem",
          background: "linear-gradient(180deg, rgba(8,15,26,0) 0%, var(--background) 100%)",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            opacity: 0.08,
            zIndex: 0,
          }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto", textAlign: "center", padding: "0 5%" }}>
          <div className="tag tag-green" style={{ margin: "0 auto 1.5rem" }}>
            <i className="fa-solid fa-heart" />
            Make an Impact Today
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Your Contribution,{" "}
            <span style={{ color: "var(--primary)", fontStyle: "italic" }}>Amplified</span>
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: "600px", margin: "0 auto" }}>
            Every dollar you give rescues food that would have been thrown away and transforms it into a warm meal for someone who needs it most.
          </p>
        </div>
      </section>

      {/* Main Donate Layout */}
      <section style={{ paddingTop: "0", paddingBottom: "6rem" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* LEFT: Impact Calculator + Trust */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Impact Calculator Card */}
            <div className="glass-card" style={{ padding: "2rem" }}>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                }}
              >
                <i className="fa-solid fa-calculator" style={{ color: "var(--primary)" }} />
                Impact Calculator
              </h3>

              {/* Slider */}
              <div style={{ marginBottom: "1.5rem" }}>
                <input
                  type="range"
                  min="5"
                  max="1000"
                  step="5"
                  value={customAmount || amount}
                  onChange={(e) => { setAmount(e.target.value); setCustomAmount(""); }}
                  style={{ width: "100%", accentColor: "var(--primary)", cursor: "pointer", height: "4px" }}
                />
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "1rem",
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "var(--primary)",
                    letterSpacing: "-0.04em",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {currSymbol}{customAmount || amount}
                </div>
              </div>

              {/* Impact Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "0.75rem",
                }}
              >
                {[
                  { value: meals.toLocaleString(), label: "Meals", color: "var(--primary)", icon: "fa-solid fa-bowl-rice" },
                  { value: `${foodSaved}kg`, label: "Food Saved", color: "var(--secondary)", icon: "fa-solid fa-leaf" },
                  { value: `${co2}kg`, label: "CO₂ Avoided", color: "var(--blue)", icon: "fa-solid fa-wind" },
                ].map(({ value, label, color, icon }) => (
                  <div
                    key={label}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--border)",
                      borderRadius: "12px",
                      padding: "1rem 0.75rem",
                      textAlign: "center",
                    }}
                  >
                    <i className={icon} style={{ color, fontSize: "1.1rem", marginBottom: "0.5rem", display: "block" }} />
                    <div style={{ fontSize: "1.2rem", fontWeight: 800, color, fontFamily: "'Inter', sans-serif" }}>{value}</div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "2px" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="glass-card" style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {TRUST_BADGES.map(({ icon, label }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        width: "36px", height: "36px",
                        borderRadius: "8px",
                        background: "rgba(16,185,129,0.1)",
                        border: "1px solid rgba(16,185,129,0.2)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <i className={icon} style={{ color: "var(--primary)", fontSize: "0.85rem" }} />
                    </div>
                    <span style={{ fontSize: "0.88rem", fontWeight: 500, color: "var(--text-muted)" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            {IMPACT_STORIES.map(({ name, location, quote, avatar }) => (
              <div
                key={name}
                className="glass-card"
                style={{ padding: "1.5rem", borderLeft: "3px solid var(--primary)" }}
              >
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7, fontStyle: "italic", marginBottom: "1rem" }}>
                  &ldquo;{quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "34px", height: "34px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.75rem", fontWeight: 700, color: "white",
                    }}
                  >
                    {avatar}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>{name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>{location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Donation Form */}
          <div className="glass-card" style={{ padding: "2.5rem", position: "sticky", top: "100px" }}>
            {/* Monthly/One-time Toggle */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
                marginBottom: "2rem",
                background: "rgba(255,255,255,0.03)",
                padding: "6px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
              }}
            >
              {["One-time", "Monthly"].map((type) => (
                <button
                  key={type}
                  onClick={() => setIsMonthly(type === "Monthly")}
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    fontFamily: "'Inter', sans-serif",
                    transition: "var(--transition)",
                    background:
                      (type === "Monthly") === isMonthly
                        ? "linear-gradient(135deg, var(--primary), var(--primary-dark))"
                        : "transparent",
                    color:
                      (type === "Monthly") === isMonthly ? "white" : "var(--text-muted)",
                    boxShadow:
                      (type === "Monthly") === isMonthly
                        ? "0 4px 12px rgba(16,185,129,0.3)"
                        : "none",
                  }}
                >
                  {type === "Monthly" && <i className="fa-solid fa-rotate" style={{ marginRight: "6px", fontSize: "0.8rem" }} />}
                  {type}
                </button>
              ))}
            </div>

            {/* Preset amounts */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label className="form-label" style={{ display: "block", marginBottom: "0.75rem" }}>
                Select Amount
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                {PRESET_AMOUNTS.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => { setAmount(preset); setCustomAmount(""); }}
                    style={{
                      padding: "11px 8px",
                      borderRadius: "10px",
                      border: "1px solid",
                      borderColor:
                        amount === preset && !customAmount
                          ? "var(--primary)"
                          : "var(--border)",
                      background:
                        amount === preset && !customAmount
                          ? "rgba(16,185,129,0.12)"
                          : "rgba(255,255,255,0.03)",
                      color:
                        amount === preset && !customAmount
                          ? "var(--primary)"
                          : "var(--text-muted)",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      transition: "var(--transition)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {currSymbol}{preset}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div style={{ marginTop: "0.75rem", position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "16px", top: "50%",
                    transform: "translateY(-50%)",
                    color: "var(--text-muted)",
                    fontWeight: 600,
                    pointerEvents: "none",
                  }}
                >
                  {currSymbol}
                </span>
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="form-input"
                  style={{ paddingLeft: "32px" }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {/* Name + Phone Row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  required
                />
              </div>

              {/* Currency */}
              <div className="form-group">
                <label className="form-label">Currency</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="form-select"
                >
                  <option value="USD">🇺🇸 USD – US Dollar</option>
                  <option value="INR">🇮🇳 INR – Indian Rupee</option>
                  <option value="EUR">🇪🇺 EUR – Euro</option>
                </select>
              </div>

              {/* Summary line */}
              <div
                style={{
                  background: "rgba(16,185,129,0.06)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  borderRadius: "12px",
                  padding: "1rem 1.25rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                  {isMonthly ? "Monthly" : "One-time"} contribution
                </span>
                <span style={{ fontWeight: 800, fontSize: "1.25rem", color: "var(--primary)", fontFamily: "'Inter', sans-serif" }}>
                  {currSymbol}{customAmount || amount}
                </span>
              </div>

              {/* CTA Button */}
              <button
                type="submit"
                className="donate-btn"
                style={{
                  width: "100%",
                  padding: "16px",
                  fontSize: "1rem",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  marginTop: "0.25rem",
                }}
              >
                <i className="fa-solid fa-heart" />
                {isMonthly ? "Start Monthly Giving" : "Complete Donation"}
                <i className="fa-solid fa-arrow-right" />
              </button>

              <p style={{ textAlign: "center", fontSize: "0.78rem", color: "var(--text-dim)", marginTop: "0.25rem" }}>
                <i className="fa-solid fa-lock" style={{ marginRight: "5px" }} />
                Secured by Razorpay. You will receive a tax receipt via email.
              </p>
            </form>
          </div>
        </div>

        {/* Responsive override */}
        <style>{`
          @media (max-width: 768px) {
            .donate-layout { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </div>
  );
}
