"use client";
import { useState } from "react";
import Image from "next/image";

export default function AboutPage() {
  const [showWhatWeDo, setShowWhatWeDo] = useState(false);
  const [showStaff, setShowStaff] = useState(false);

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "140px", paddingBottom: "6rem", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.1) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1, padding: "0 5%" }}>
          <div className="tag tag-green" style={{ marginBottom: "1.5rem", display: "inline-block" }}>
            <i className="fa-solid fa-leaf"></i> Our Story
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", marginBottom: "1.5rem" }}>
            Bridging the Gap Between <span style={{ color: "var(--primary)", fontStyle: "italic" }}>Surplus & Scarcity</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
            In a world of abundance, hunger is a logistical failure. RescueKitchen leverages real-time data to ensure that perfectly good food reaches the plates of those who need it most.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ paddingTop: "0", paddingBottom: "6rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gap: "4rem" }}>
          
          {/* What We Do */}
          <div className="glass-card" style={{ padding: "3rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "6px", height: "100%", background: "var(--primary)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fa-solid fa-bullseye" style={{ fontSize: "1.5rem", color: "var(--primary)" }}></i>
              </div>
              <h2 style={{ fontSize: "2.5rem" }}>What We Do</h2>
            </div>
            
            <div style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <p>
                <span style={{ color: "var(--text-main)", fontWeight: 600 }}>RescueKitchen</span> is a social enterprise that connects NGOs and restaurants to help each other for food supply and reduce food waste. We believe that food is a precious resource that should not be wasted, but rather shared with those who need it most.
              </p>
              <p>
                Our mission is to rescue surplus food from restaurants and deliver it to NGOs that serve the hungry and the homeless. By doing so, we help restaurants save money, reduce their environmental impact, and contribute to social good. We also help NGOs save time, money, and resources, and provide nutritious meals to their beneficiaries.
              </p>
              
              <div style={{ 
                height: showWhatWeDo ? "auto" : "0", 
                overflow: "hidden", 
                opacity: showWhatWeDo ? 1 : 0, 
                transition: "opacity 0.4s ease, height 0.4s ease",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem"
              }}>
                <p>
                  We started RescueKitchen in 2024, after witnessing the huge amount of food that was thrown away every day by restaurants, while millions of people were suffering from hunger and malnutrition. We decided to create a platform that would match restaurants with NGOs, and coordinate the logistics of food collection and delivery.
                </p>
                <p>
                  Since then, we have rescued over <span style={{ color: "var(--secondary)", fontWeight: 600 }}>10,000 kg of food</span>, and provided over <span style={{ color: "var(--secondary)", fontWeight: 600 }}>50,000 meals</span> to people in need. We have also partnered with over 100 restaurants and 50 NGOs across Ahmedabad, and we are expanding to other cities soon. We have received recognition and support from various organizations, such as The Times of India, NDTV, and The Better India.
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => setShowWhatWeDo(!showWhatWeDo)} 
              style={{ background: "none", border: "none", color: "var(--primary)", fontWeight: 600, fontSize: "1rem", marginTop: "1.5rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}
            >
              {showWhatWeDo ? "Read less" : "Read more"} <i className={`fa-solid fa-chevron-${showWhatWeDo ? "up" : "down"}`}></i>
            </button>
          </div>

          {/* Our Team */}
          <div className="glass-card" style={{ padding: "3rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "6px", height: "100%", background: "var(--secondary)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(251,191,36,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fa-solid fa-users" style={{ fontSize: "1.5rem", color: "var(--secondary)" }}></i>
              </div>
              <h2 style={{ fontSize: "2.5rem" }}>Our Staff</h2>
            </div>
            
            <div style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <p>
                Our team comes from a wide variety of backgrounds, bringing a diverse blend of expertise and experience in food business strategy and sustainability, finance, data analytics, culinary arts, research, agricultural development, and communications. Meet the people who make our work possible.
              </p>
              
              <div style={{ 
                height: showStaff ? "auto" : "0", 
                overflow: "hidden", 
                opacity: showStaff ? 1 : 0, 
                transition: "opacity 0.4s ease, height 0.4s ease"
              }}>
                <p>
                  We are a team of passionate and dedicated individuals who share a common vision of a world where no food is wasted, and no one goes hungry. We invite you to join us in our journey of rescuing food and feeding hope.
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => setShowStaff(!showStaff)} 
              style={{ background: "none", border: "none", color: "var(--secondary)", fontWeight: 600, fontSize: "1rem", marginTop: "1.5rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}
            >
              {showStaff ? "Read less" : "Read more"} <i className={`fa-solid fa-chevron-${showStaff ? "up" : "down"}`}></i>
            </button>
          </div>

          {/* Founder */}
          <div>
            <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "3rem" }}>Leadership</h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="glass-card" style={{ padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: "350px", transition: "var(--transition)" }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-10px)"} onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                <div style={{ width: "150px", height: "150px", borderRadius: "50%", overflow: "hidden", marginBottom: "1.5rem", border: "4px solid rgba(16,185,129,0.2)" }}>
                  <div style={{ width: "100%", height: "100%", background: "url('/Me.jpeg') center/cover", backgroundColor: "var(--surface)" }} />
                </div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Brijesh Shah</h3>
                <p style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>Founder & CEO</p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  "The Imaginer" behind RescueKitchen, driven by a passion to eradicate food waste and build a sustainable ecosystem for Ahmedabad.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
