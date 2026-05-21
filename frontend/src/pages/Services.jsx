import React from "react";
import CtaBand from "../components/CtaBand";
import { services } from "../constants";

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container reveal">
          <p className="eyebrow">Services</p>
          <h1 style={{ fontSize: "clamp(48px, 7vw, 100px)", lineHeight: "0.95", marginBottom: "24px", color: "#ffffff" }}>
            Brand systems and digital engines with bite.
          </h1>
          <p style={{ fontSize: "18px", color: "var(--muted)", maxWidth: "720px", lineHeight: "1.75" }}>
            Choose one focused capability or partner with us for a complete creative brand transformation.
          </p>
        </div>
      </section>

      <section className="section light-section">
        <div className="container service-list">
          {services.map(([title, text, bullets, icon], i) => (
            <article className="service-detail reveal" key={title}>
              <div className="service-content">
                <span className="service-number">0{i + 1} // {icon}</span>
                <h2>{title}</h2>
                <p>{text}</p>
                <ul>
                  {bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="service-visual">
                <div className="service-visual-placeholder">
                  <div className="diagonal-grid-overlay" style={{ borderRadius: "12px" }} />
                  <span style={{ fontSize: "36px", color: "var(--accent)", marginBottom: "8px" }}>{icon}</span>
                  <span style={{ fontSize: "12px", tracking: "0.1em", fontWeight: "700" }}>ADMETTA // {title.toUpperCase()}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Have a launch, pivot, or growth target?" label="Discuss Your Project" />
    </>
  );
}
