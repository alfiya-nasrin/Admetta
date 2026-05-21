import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { whatsappUrl, img } from "../constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""} ${open ? "menu-active" : ""}`}>
      <Link className="brand" to="/" aria-label="Admetta home">
        <img className="brand-logo" src={img("admetta-logo.svg")} alt="Admetta Logo" style={{ height: "32px", width: "auto" }} />
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className="site-nav" aria-label="Primary navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Works</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          WhatsApp Us
        </a>
      </nav>
    </header>
  );
}
