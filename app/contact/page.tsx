"use client";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Name is required.";
    if (!phone.trim()) errs.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(phone.replace(/\D/g, ""))) errs.phone = "Enter a valid 10-digit number.";
    if (!email.trim()) errs.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = "Enter a valid email.";
    if (!message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setName(""); setPhone(""); setEmail(""); setMessage(""); setErrors({});
    }, 600);
  };

  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--background)", paddingTop: "80px" }}>
        <div className="glass-card" style={{ textAlign: "center", maxWidth: "500px", padding: "4rem 3rem" }}>
          <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(16,185,129,0.1)", border: "2px solid var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem" }}>
            <i className="fa-solid fa-check" style={{ fontSize: "2.5rem", color: "var(--primary)" }}></i>
          </div>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Message Sent!</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.6 }}>Thank you for reaching out. A member of the RescueKitchen team will get back to you within 24 hours.</p>
          <button onClick={() => setSubmitted(false)} className="btn-secondary" style={{ width: "100%" }}>Send Another Message</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "140px", paddingBottom: "4rem", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 80% 20%, rgba(16,185,129,0.08) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="tag tag-green" style={{ marginBottom: "1.5rem" }}><i className="fa-solid fa-headset"></i> We're Here to Help</div>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1rem" }}>Get in <span style={{ color: "var(--primary)", fontStyle: "italic" }}>Touch</span></h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "600px", lineHeight: 1.7 }}>
            Whether you're an NGO looking to partner, a restaurant with surplus food, or someone who wants to volunteer, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ paddingTop: "0", paddingBottom: "6rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "4rem", alignItems: "start" }}>
          
          {/* Contact Info */}
          <div>
            <div className="glass-card" style={{ padding: "2.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Contact Information</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className="fa-solid fa-location-dot" style={{ color: "var(--primary)" }}></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>Headquarters</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.5 }}>Navrangpura, Ahmedabad<br />Gujarat 380009, India</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className="fa-solid fa-envelope" style={{ color: "var(--primary)" }}></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>Email Us</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>hello@rescuekitchen.com</p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>support@rescuekitchen.com</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className="fa-solid fa-phone" style={{ color: "var(--primary)" }}></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>Call Us</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>+91 98765 43210</p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Mon-Fri, 9am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: "2.5rem" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Follow our journey</h3>
              <div style={{ display: "flex", gap: "1rem" }}>
                <a href="#" className="social-icon" style={{ background: "rgba(255,255,255,0.03)" }}><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="social-icon" style={{ background: "rgba(255,255,255,0.03)" }}><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#" className="social-icon" style={{ background: "rgba(255,255,255,0.03)" }}><i className="fa-brands fa-x-twitter"></i></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card" style={{ padding: "3rem" }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>Send a Message</h3>
            <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Fill out the form below and we'll be in touch shortly.</p>
            
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="John Doe" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    style={{ borderColor: errors.name ? "red" : undefined }}
                  />
                  {errors.name && <span style={{ color: "red", fontSize: "0.75rem" }}>{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input 
                    type="tel" 
                    className="form-input" 
                    placeholder="+91 XXXXX XXXXX" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    style={{ borderColor: errors.phone ? "red" : undefined }}
                  />
                  {errors.phone && <span style={{ color: "red", fontSize: "0.75rem" }}>{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="john@example.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  style={{ borderColor: errors.email ? "red" : undefined }}
                />
                {errors.email && <span style={{ color: "red", fontSize: "0.75rem" }}>{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Your Message</label>
                <textarea 
                  className="form-input" 
                  placeholder="How can we help you?" 
                  rows={5} 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  style={{ resize: "vertical", borderColor: errors.message ? "red" : undefined }}
                />
                {errors.message && <span style={{ color: "red", fontSize: "0.75rem" }}>{errors.message}</span>}
              </div>

              <button type="submit" className="donate-btn" style={{ width: "100%", padding: "16px", fontSize: "1rem", marginTop: "1rem" }}>
                Send Message <i className="fa-solid fa-paper-plane" style={{ marginLeft: "8px" }}></i>
              </button>
            </form>
          </div>

        </div>
        
        {/* Responsive layout override */}
        <style>{`
          @media (max-width: 900px) {
            div[style*="gridTemplateColumns: 1fr 1.2fr"] { grid-template-columns: 1fr !important; }
            div[style*="gridTemplateColumns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </div>
  );
}
