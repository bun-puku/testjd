import React from "react";
import cakes from "../data/cakes.json";
import CakeCard from "../components/CakeCard.jsx";

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <h2>Our Cakes</h2>
        <p className="gallery-intro">
          Every cake is made to order. Below are customer favorites.
        </p>

        <div className="gallery-grid">
          {cakes.map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>
      </div>
    </section>
  );
}
