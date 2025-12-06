import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <h1>Delicious cakes for every celebration</h1>
        <p>
          We bake small batches of handcrafted cakes using real ingredients — no
          shortcuts, just honest flavor and beautiful finishes.
        </p>

        <Link className="cta" to="/gallery">
          Browse our gallery
        </Link>
      </div>
    </section>
  );
}
