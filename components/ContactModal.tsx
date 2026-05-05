"use client";
import { useState, useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  recipient: string;
  onClose: () => void;
}

const recipientEmails: Record<string, string> = {
  "Burger King":    "burgerking@gmail.com",
  "McDonald's":     "mcdonalds@gmail.com",
  "Domino's":       "dominos@gmail.com",
  "Pizza Hut":      "pizzahut@gmail.com",
  "Haldiram's":     "haldirams@gmail.com",
  "Subway":         "subway@gmail.com",
  "Save the Children": "stc@gmail.com",
  "International Rescue Committee": "irc@gmail.com",
  "Care International": "careinternational@gmail.com",
  "directrelief":   "DirectRelief@gmail.com",
};

export default function ContactModal({ isOpen, recipient, onClose }: ContactModalProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleSend = () => {
    if (!email || !message) return;
    const recipientEmail = recipientEmails[recipient] || "contact@rescuekitchen.com";
    const subject = encodeURIComponent(`Partnership Inquiry for ${recipient} via RescueKitchen`);
    const body = encodeURIComponent(message);
    localStorage.setItem("restaurantForm", JSON.stringify({ email, message, recipient }));
    setSent(true);
    setTimeout(() => {
      window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
      setSent(false);
      setEmail("");
      setMessage("");
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        background: "rgba(8, 15, 26, 0.85)",
        backdropFilter: "blur(12px)",
        animation: "fadeIn 0.2s ease",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "24px",
          padding: "2.5rem",
          width: "100%",
          maxWidth: "480px",
          position: "relative",
          boxShadow: "var(--shadow-lg), 0 0 60px rgba(16,185,129,0.08)",
          animation: "reveal 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "2px",
            borderRadius: "24px 24px 0 0",
            background: "linear-gradient(90deg, transparent, var(--primary), transparent)",
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid var(--border)",
            color: "var(--text-muted)",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            transition: "var(--transition)",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)"; }}
        >
          <i className="fa-solid fa-xmark" />
        </button>

        {/* Icon + Title */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <i className="fa-solid fa-envelope" style={{ color: "var(--primary)", fontSize: "1.1rem" }} />
          </div>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "4px" }}>
            Contact <span style={{ color: "var(--primary)" }}>{recipient}</span>
          </h2>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Send a message directly. We&apos;ll help facilitate the partnership.
          </p>
        </div>

        {/* Form */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Recipient (read-only) */}
          <div className="form-group">
            <label className="form-label">To</label>
            <input
              type="text"
              readOnly
              value={recipient}
              className="form-input"
              style={{ opacity: 0.6, cursor: "default" }}
            />
          </div>

          {/* Sender email */}
          <div className="form-group">
            <label className="form-label">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="yourname@example.com"
              className="form-input"
              required
            />
          </div>

          {/* Message */}
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hello! I'd like to discuss a food rescue partnership..."
              rows={4}
              style={{
                width: "100%",
                padding: "14px 18px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                color: "var(--text-main)",
                fontSize: "0.95rem",
                fontFamily: "'Inter', sans-serif",
                transition: "var(--transition)",
                outline: "none",
                resize: "vertical",
                minHeight: "100px",
              }}
              onFocus={(e) => {
                (e.target as HTMLTextAreaElement).style.borderColor = "var(--primary)";
                (e.target as HTMLTextAreaElement).style.boxShadow = "0 0 0 3px var(--primary-glow)";
              }}
              onBlur={(e) => {
                (e.target as HTMLTextAreaElement).style.borderColor = "var(--border)";
                (e.target as HTMLTextAreaElement).style.boxShadow = "none";
              }}
            />
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.25rem" }}>
            <button
              onClick={onClose}
              style={{
                flex: 1,
                padding: "13px",
                borderRadius: "10px",
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--text-muted)",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.9rem",
                fontFamily: "'Inter', sans-serif",
                transition: "var(--transition)",
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSend}
              className="donate-btn"
              style={{
                flex: 2,
                padding: "13px",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
              disabled={!email || !message}
            >
              {sent ? (
                <>
                  <i className="fa-solid fa-check" />
                  Sent!
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
