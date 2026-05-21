import React from "react";
import { Link } from "react-router-dom";
import CtaBand from "../components/CtaBand";
import { img, services, projectsList as projects } from "../constants";

export default function Home() {
  return (
    <>
      <section className="hero home-hero">
        <div className="diagonal-grid-overlay" />
        <div className="orb-glow-overlay" />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div className="hero-copy reveal">
            <p className="eyebrow">Bold strategy. Vibrant creativity.</p>
            <h1 className="hero-stack">
              <span className="stack-word" style={{ animationDelay: '0s' }}>Strategy</span>
              <span className="stack-word" style={{ animationDelay: '0.15s' }}>Design</span>
              <span className="stack-word" style={{ animationDelay: '0.3s' }}>Impact</span>
            </h1>
            <p className="hero-text">
              We design and build brand identities, high-performing websites, and advertising campaigns that demand attention.
            </p>
            <div className="hero-actions" style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
              <Link className="btn btn-primary" to="/contact">
                Start a Project <span aria-hidden="true" style={{ marginLeft: "4px" }}>→</span>
              </Link>
              <Link className="btn btn-ghost" to="/portfolio">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container">
          <div className="section-heading reveal" style={{ marginBottom: "56px" }}>
            <p className="eyebrow">Why Admetta</p>
            <h2>Sharper ideas for brands that refuse to blend in.</h2>
          </div>
          <div className="feature-grid">
            {["Strategic Thinking", "Creative Design", "Measurable Results"].map((title, i) => (
              <article className="feature-card reveal" key={title}>
                <span className="icon">{["◈", "✦", "↗"][i]}</span>
                <h3>{title}</h3>
                <p>
                  {[
                    "Positioning and campaign plans built around clear business goals.",
                    "Visual systems that make your brand feel immediate and memorable.",
                    "Content, ads, and digital touchpoints shaped to move audiences."
                  ][i]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="statement-band">
        <div className="diagonal-grid-overlay" />
        <div className="orb-glow-overlay" />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h2>
            <span>We Build Brands</span>
            <span style={{ color: "var(--accent)" }}>And With Brands</span>
            <span>We Build Legacies</span>
          </h2>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="split-heading reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px" }}>
            <div>
              <p className="eyebrow">Services</p>
              <h2>From identity to influence.</h2>
            </div>
            <Link className="text-link" to="/services" style={{ color: "var(--accent)", fontWeight: "600", textDecoration: "none" }}>
              Explore Services →
            </Link>
          </div>
          <div className="service-teaser-grid">
            {services.slice(0, 4).map(([title, text, , icon]) => (
              <article className="service-card reveal" key={title}>
                <span className="icon">{icon}</span>
                <h3>{title.replace(" & Logo Design", "").replace(" Strategy", "")}</h3>
                <p>{text.split(".")[0]}.</p>
                <Link to="/services" style={{ color: "var(--accent)", fontWeight: "600", marginTop: "16px", display: "inline-block", textDecoration: "none" }}>
                  Learn More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container">
          <div className="split-heading reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px" }}>
            <div>
              <p className="eyebrow">Featured Work</p>
              <h2>Brand worlds built to be noticed.</h2>
            </div>
            <Link className="text-link" to="/portfolio" style={{ color: "var(--accent)", fontWeight: "600", textDecoration: "none" }}>
              View All Work →
            </Link>
          </div>
          <div className="portfolio-grid">
            {projects.slice(0, 3).map(([title, category, , image]) => (
              <article className="portfolio-card reveal" key={title}>
                <img src={img(image)} alt={title} />
                <div>
                  <span>{category}</span>
                  <h2>{title}</h2>
                  <Link to="/portfolio" style={{ textDecoration: "none" }}>View Project →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading reveal" style={{ marginBottom: "56px" }}>
            <p className="eyebrow">Social Proof</p>
            <h2>Clients feel the shift.</h2>
          </div>
          <div className="testimonial-grid">
            {[
              "Admetta turned our scattered ideas into a premium identity with real commercial direction.",
              "The campaign language, visuals, and reporting all felt sharp.",
              "Their team brought confidence, taste, and momentum from strategy through launch."
            ].map((quote, i) => (
              <article className="testimonial-card reveal" key={quote}>
                <div className="stars">★★★★★</div>
                <p style={{ fontStyle: "italic", margin: "16px 0" }}>“{quote}”</p>
                <strong style={{ display: "block", color: "#ffffff" }}>{["Riya Menon", "Arjun Rao", "Sana Khan"][i]}</strong>
                <span style={{ fontSize: "14px", color: "var(--muted)" }}>
                  {
                    [
                      "Founder, Studio Bloom",
                      "Marketing Lead, Nova Retail",
                      "Director, Elevate Co."
                    ][i]
                  }
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to elevate your brand?" />
    </>
  );
}
