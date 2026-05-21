import React from "react";
import { Link } from "react-router-dom";
import { email, whatsappUrl, img } from "../constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" to="/">
            <img className="brand-logo" src={img("admetta-logo.svg")} alt="Admetta Logo" style={{ height: "28px", width: "auto" }} />
          </Link>
          <p style={{ marginTop: "16px" }}>Bold strategy. Vibrant creativity.</p>
          <div className="socials" style={{ display: "flex", gap: "16px", marginTop: "20px" }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LN</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <div className="footer-column-links">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Works</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h3>Let's Connect</h3>
          <div className="footer-column-contact">
            <a href={`mailto:${email}`}>{email}</a>
            <a className="footer-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", width: "fit-content" }}>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <span>© 2026 Admetta. All rights reserved.</span>
          <span className="footer-scroll-top" onClick={scrollToTop}>
            Scroll to Top ↑
          </span>
        </div>
      </div>
    </footer>
  );
}
