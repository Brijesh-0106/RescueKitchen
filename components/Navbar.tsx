"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/foodwaste", label: "Marketplace" },
  { href: "/restaurants", label: "Partners" },
  { href: "/dashboard", label: "Impact" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {/* Logo */}
        <Link href="/" className="logo-wrapper">
          <div className="logo-icon">R</div>
          <span className="logo-text">Rescue<span>Kitchen</span></span>
        </Link>

        {/* Desktop Nav */}
        <ul className="nav-ul" style={{ listStyle: "none" }}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link${pathname === href ? " active" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/donate">
              <button className="donate-btn">Donate Now</button>
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ display: "none" }}
        >
          <i className={`fa-solid ${mobileOpen ? "fa-xmark" : "fa-bars"}`} />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            top: "68px",
            background: "rgba(8, 15, 26, 0.97)",
            backdropFilter: "blur(20px)",
            padding: "2rem 6%",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                padding: "14px 16px",
                borderRadius: "10px",
                color: pathname === href ? "var(--primary)" : "var(--text-muted)",
                fontWeight: 500,
                fontSize: "1rem",
                background: pathname === href ? "rgba(16,185,129,0.08)" : "transparent",
                border: "1px solid",
                borderColor: pathname === href ? "rgba(16,185,129,0.2)" : "transparent",
                transition: "var(--transition)",
              }}
            >
              {label}
            </Link>
          ))}
          <Link href="/donate" style={{ marginTop: "1rem" }}>
            <button className="donate-btn" style={{ width: "100%", padding: "14px" }}>
              Donate Now
            </button>
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-ul { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}
