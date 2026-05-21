import React from "react";
import { Link } from "react-router-dom";

export default function PageHero({
  eyebrow = "Welcome",
  title = "Admetta",
  text = "Innovative solutions for modern challenges.",
  ctaText = "Get Started",
  ctaLink = "/contact"
}) {
  return (
    <section className="hero-clean page-hero">
      <div className="hero-copy hero-content container reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="hero-stack">
          <span>{title}</span>
        </h1>
        <p className="hero-text">{text}</p>
        <Link to={ctaLink} className="btn btn-primary hero-cta">
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
