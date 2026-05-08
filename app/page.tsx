"use client";
import Link from "next/link";
import SurplusFeed from "@/components/SurplusFeed";
import ImpactStats from "@/components/ImpactStats";
import ImpactMap from "@/components/ImpactMap";

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Cinematic Hero */}
      <div className="hero" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80")' }}>
        <div className="hero-overlay"></div>
        <div className="engage reveal">
          <h2>
            Rescuing Surplus. <span>Feeding the Future.</span>
          </h2>
          <p>
            Join the elite network of restaurants and NGOs turning food waste into real community impact.
          </p>
          <div className="hero-btns">
            <Link href="/donate"><button className="donate-btn btn-lg">Become a Donor</button></Link>
            <Link href="/contact"><button className="btn-secondary btn-lg">Partner With Us</button></Link>
          </div>
        </div>
      </div>

      {/* Real-time Stats Section */}
      <section style={{ background: "linear-gradient(to bottom, #0f172a, #1e293b)" }}>
        <div className="sec-header" style={{ textAlign: "center", marginBottom: "5rem" }}>
          <h1 className="sec-title">The Impact at a Glance</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.2rem" }}>Quantifying our collective effort to eradicate food waste.</p>
        </div>
        <ImpactStats />
        <div style={{ marginTop: "5rem" }}>
          <ImpactMap />
        </div>
      </section>

      {/* Surplus Feed - Redesigned */}
      <section>
        <SurplusFeed />
      </section>

      {/* Story / Motivation */}
      <section style={{ background: "#0f172a" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div className="premium-card" style={{ padding: "0", overflow: "hidden", height: "550px" }}>
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80"
              alt="Mission"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: "3.5rem", marginBottom: "2rem" }}>Our <span className="text-gradient">Mission</span></h2>
            <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
              In a world of abundance, hunger is a logistical failure. RescueKitchen is the bridge.
              We leverage real-time data to ensure that perfectly good food reaches the plates of those who need it most,
              reducing carbon footprints and nourishing lives.
            </p>
            <ul style={{ listStyle: "none", marginBottom: "3rem" }}>
              <li style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fa-solid fa-check-circle" style={{ color: "var(--primary)" }}></i>
                <span>Real-time logistics tracking</span>
              </li>
              <li style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fa-solid fa-check-circle" style={{ color: "var(--primary)" }}></i>
                <span>Zero-cost partnership for NGOs</span>
              </li>
              <li style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fa-solid fa-check-circle" style={{ color: "var(--primary)" }}></i>
                <span>Carbon offset certificates for Restaurants</span>
              </li>
            </ul>
            <Link href="/about" className="donate-btn">Explore Full Mission</Link>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section style={{ textAlign: "center", padding: "10rem 10%", background: "linear-gradient(45deg, #064e3b, #10b981)" }}>
        <h2 style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>Ready to join the movement?</h2>
        <p style={{ fontSize: "1.5rem", marginBottom: "3rem", opacity: 0.9 }}>Scale your impact today.</p>
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
          <Link href="/donate" className="btn-secondary btn-lg" style={{ background: "white", color: "var(--primary-dark)" }}>Start Donating</Link>
          <Link href="/contact" className="btn-secondary btn-lg">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
