import React from "react";
import CtaBand from "../components/CtaBand";
import { posters } from "../constants/posters";



export default function Portfolio() {
  const visibleProjects = posters;

  return (
    <>
      <section className="page-hero">
        <div className="container reveal">
          <p className="eyebrow">Works</p>
          <h1 style={{ fontSize: "clamp(48px, 7vw, 100px)", lineHeight: "0.95", marginBottom: "24px", color: "#ffffff" }}>
            Selected brand worlds.
          </h1>
          <p style={{ fontSize: "18px", color: "var(--muted)", maxWidth: "720px", lineHeight: "1.75" }}>
            A showcase of brand design, performance campaign architectures, and bespoke web platforms crafted to dominate.
          </p>
        </div>
      </section>

      <section className="section light-section">
        <div className="container">
          <div className="portfolio-grid">
            {visibleProjects.map((poster, idx) => (
              <article className="portfolio-card reveal" key={idx}>
                                <img src={poster.src} alt={poster.title} srcSet={`${poster.src} 1x, ${poster.src} 2x`} />
                <div>
                  <span>{poster.title}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Your project belongs in the next slot." label="Start a Project" />
    </>
  );
}
