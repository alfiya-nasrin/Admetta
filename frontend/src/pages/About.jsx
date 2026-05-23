import React from "react";
import CtaBand from "../components/CtaBand";
import { img } from "../constants";

export default function About() {
  const logos = Array.from({ length: 30 }, (_, i) =>
    String.fromCharCode(65 + (i % 26)) + (i > 25 ? i - 25 : "")
  );

  return (
    <>
      <section className="page-hero">
        <div className="container reveal">
          <p className="eyebrow">About Us</p>
          <h1 style={{ fontSize: "clamp(48px, 7vw, 100px)", lineHeight: "0.95", marginBottom: "24px", color: "#ffffff" }}>
            We shape brands with clarity and voltage.
          </h1>
          <p style={{ fontSize: "18px", color: "var(--muted)", maxWidth: "720px", lineHeight: "1.75" }}>
            Admetta partners with ambitious businesses to build visual systems, interactive websites, and campaign engines that stand out in crowded markets.
          </p>
        </div>
      </section>

      <section className="section light-section">
        <div className="container two-column">
          <div className="reveal">
            <p className="eyebrow">Who We Are</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "24px" }}>
              Creative operators with a strategist’s spine.
            </h2>
            <p style={{ marginBottom: "16px" }}>
              We believe bold work should still be disciplined. Every identity, visual system, and campaign starts with a deep understanding of what will make the audience care enough to act.
            </p>
            <p>
              Our process blends market insight, visual craft, content rhythm, and technology into one connected brand experience.
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <div className="diagonal-grid-overlay" style={{ borderRadius: "12px" }} />
            <img
              className="image-frame reveal"
              src={img("about-studio.svg")}
              alt="Admetta studio workspace"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      <section className="statement-band" style={{ padding: "100px 0" }}>
        <div className="container reveal">
          <h2 style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: "1.1", color: "#ffffff", maxWidth: "900px", margin: "0 auto" }}>
            Our mission is to build brands that move people, markets, and momentum.
          </h2>
        </div>
      </section>

      <section className="section light-section">
        <div className="container">
          <div className="section-heading reveal" style={{ marginBottom: "56px" }}>
            <p className="eyebrow">Our Values</p>
            <h2>How we make the work sharper.</h2>
          </div>
          <div className="feature-grid">
            {["Creativity", "Strategy", "Results"].map((v, i) => (
              <article className="feature-card reveal" key={v}>
                <span className="icon">{["✦", "◈", "↗"][i]}</span>
                <h3>{v}</h3>
                <p>
                  {[
                    "Distinctive visual and verbal ideas with a premium edge.",
                    "Clear thinking before creative execution, always.",
                    "Campaigns designed for visibility, trust, and action."
                  ][i]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading reveal" style={{ marginBottom: "56px" }}>
            <p className="eyebrow">Team</p>
            <h2>The minds behind the momentum.</h2>
          </div>
          <div className="team-grid">
            {["Aisha Verma", "Kabir Shah", "Mira Nair", "Dev Iyer"].map((name, i) => (
              <article className="team-card reveal" key={name}>
                <div style={{ position: "relative" }}>
                  <img src={img(`team-${i + 1}.svg`)} alt={name} style={{ display: "block", width: "100%" }} />
                </div>
                <h3>{name}</h3>
                <p>
                  {
                    [
                      "Creative Director",
                      "Strategy Lead",
                      "Content Producer",
                      "Performance Specialist"
                    ][i]
                  }
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container">
          <div className="section-heading reveal" style={{ marginBottom: "40px" }}>
            <p className="eyebrow">Clients</p>
            <h2>Trusted across categories.</h2>
          </div>
          <div className="logo-cloud" aria-label="Client logo placeholders">
            {logos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let’s build the brand people remember." />
    </>
  );
}
