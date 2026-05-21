import React from "react";
import { Link } from "react-router-dom";

export default function CtaBand({ title, label = "Get in Touch" }) {
  return (
    <section className="cta-band">
      <div className="container cta-inner reveal">
        <h2>{title}</h2>
        <Link className="btn btn-primary" to="/contact">
          {label}
        </Link>
      </div>
    </section>
  );
}
