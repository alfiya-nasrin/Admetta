import React, { useState } from "react";
import { email, whatsappUrl, services } from "../constants";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setLoading(true);
    setStatus("");
    try {
      await new Promise((r) => setTimeout(r, 500));
      setStatus("Message sent! (no backend)");
      form.reset();
    } catch (error) {
      setStatus(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container reveal">
          <p className="eyebrow">Contact</p>
          <h1 style={{ fontSize: "clamp(48px, 7vw, 100px)", lineHeight: "0.95", marginBottom: "24px", color: "#ffffff" }}>
            Let's build a brand with voltage.
          </h1>
          <p style={{ fontSize: "18px", color: "var(--muted)", maxWidth: "720px", lineHeight: "1.75" }}>
            Tell us about your project, target launch, or branding strategy. We'll bring the spark and structure.
          </p>
        </div>
      </section>

      <section className="section light-section">
        <div className="container contact-grid">
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" required />
            </div>
            <div className="field">
              <label htmlFor="service">Service Interested In</label>
              <select id="service" name="service" required>
                <option value="">Select a service</option>
                {services.map(([title]) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </select>
            </div>
            <div className="field field-full">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" required />
            </div>
            <button className="btn btn-primary" type="submit" disabled={loading} style={{ border: "none" }}>
              {loading ? "Sending..." : "Send Message →"}
            </button>
            {status && (
              <p className="form-success show" role="status" style={{ color: "var(--accent)", fontWeight: "600", marginTop: "12px" }}>
                {status}
              </p>
            )}
          </form>
          <aside className="contact-info reveal">
            <h2>Let's connect.</h2>
            <p style={{ marginBottom: "32px" }}>For project inquiries, collaborations, and brand growth conversations.</p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <span style={{ color: "var(--accent)", fontSize: "18px" }}>✉</span>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <div className="contact-detail-item">
                <span style={{ color: "var(--accent)", fontSize: "18px" }}>💬</span>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp Click-to-Chat
                </a>
              </div>
            </div>

            <div className="map-placeholder">
              <iframe title="Google Maps placeholder for Admetta office location" src="about:blank" />
              <div style={{ padding: "16px", fontSize: "14px", color: "var(--muted)", background: "rgba(0,0,0,0.2)", borderTop: "1px solid var(--line)" }}>
                Office Location // Bangalore, India
              </div>
            </div>
            <div className="socials" style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                IG
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                LN
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                FB
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
