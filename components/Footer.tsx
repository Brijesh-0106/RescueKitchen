import Link from "next/link";

const PLATFORM_LINKS = [
  { href: "/foodwaste", label: "Marketplace" },
  { href: "/restaurants", label: "Partners" },
  { href: "/ngos", label: "NGO Network" },
  { href: "/dashboard", label: "Impact Dashboard" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "Our Mission" },
  { href: "/contact", label: "Get in Touch" },
  { href: "/donate", label: "Donate" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const SOCIALS = [
  { icon: "fab fa-facebook-f", href: "#", label: "Facebook" },
  { icon: "fab fa-instagram",  href: "#", label: "Instagram" },
  { icon: "fab fa-twitter",    href: "#", label: "Twitter" },
  { icon: "fab fa-linkedin-in",href: "#", label: "LinkedIn" },
  { icon: "fab fa-youtube",    href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Main Grid */}
      <div className="footer-grid">
        {/* Brand Column */}
        <div className="footer-brand">
          <Link href="/" className="logo-wrapper" style={{ marginBottom: "1rem", display: "inline-flex" }}>
            <div
              className="logo-icon"
              style={{
                width: "40px", height: "40px",
                background: "linear-gradient(135deg, #10b981, #059669)",
                borderRadius: "10px", display: "flex", alignItems: "center",
                justifyContent: "center", color: "white", fontWeight: 900,
                fontSize: "1.1rem", flexShrink: 0,
                boxShadow: "0 0 20px rgba(16,185,129,0.3)",
              }}
            >
              R
            </div>
            <span
              className="logo-text"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem", fontWeight: 800, marginLeft: "12px",
                color: "var(--text-main)", letterSpacing: "-0.5px",
              }}
            >
              Rescue<span style={{ color: "var(--primary)" }}>Kitchen</span>
            </span>
          </Link>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: "290px", marginTop: "1rem" }}>
            Pioneering a zero-waste future through technology and community empowerment.
            Ahmedabad&apos;s leading food rescue platform.
          </p>

          {/* Social Icons */}
          <div className="footer-socials">
            {SOCIALS.map(({ icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="social-icon">
                <i className={icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Platform Links */}
        <div className="footer-col">
          <h4>Platform</h4>
          <ul>
            {PLATFORM_LINKS.map(({ href, label }) => (
              <li key={label}>
                <Link href={href}>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "0.6rem", opacity: 0.5 }} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            {COMPANY_LINKS.map(({ href, label }) => (
              <li key={label}>
                <Link href={href}>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "0.6rem", opacity: 0.5 }} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal + Newsletter */}
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            {LEGAL_LINKS.map(({ href, label }) => (
              <li key={label}>
                <Link href={href}>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "0.6rem", opacity: 0.5 }} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Newsletter Signup */}
          <h4 style={{ marginTop: "2rem" }}>Stay Updated</h4>
          <div
            style={{
              display: "flex", gap: "8px", marginTop: "0.75rem",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "10px", padding: "6px 6px 6px 14px",
            }}
          >
            <input
              type="email"
              placeholder="Email address"
              style={{
                background: "transparent", border: "none", outline: "none",
                color: "var(--text-main)", fontSize: "0.85rem", flex: 1, minWidth: 0,
                fontFamily: "'Inter', sans-serif",
              }}
            />
            <button
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
                border: "none", borderRadius: "7px", padding: "8px 14px",
                color: "white", cursor: "pointer", fontSize: "0.8rem",
                fontWeight: 600, flexShrink: 0, fontFamily: "'Inter', sans-serif",
              }}
            >
              Join
            </button>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <span>© 2024 RescueKitchen, Inc. · 501(c)(3) Non-Profit · Tax ID: 83-1579781</span>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <div className="footer-badge">
            <i className="fa-solid fa-leaf" />
            Carbon Neutral Platform
          </div>
          <span style={{ fontSize: "0.82rem", color: "var(--text-dim)" }}>
            Made with <i className="fa-solid fa-heart" style={{ color: "var(--primary)", fontSize: "0.75rem" }} /> for Ahmedabad
          </span>
        </div>
      </div>
    </footer>
  );
}
