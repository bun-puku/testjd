import React from "react";

export default function CakeCard({ cake }) {
  const handleBuy = () => {
    const confirmBuy = confirm(
      `Add "${cake.title}" ($${cake.price}) to your order?`
    );
    if (confirmBuy) alert(`Thanks! "${cake.title}" has been added.`);
  };

  return (
    <article className="card">
      <div className="img-wrap">
        <img src={cake.image} alt={cake.alt} loading="lazy" />
      </div>

      <div className="card-body">
        <h3>{cake.title}</h3>
        <p>{cake.description}</p>

        <div className="meta">
          <div className="price">${cake.price}</div>
          <button className="buy" onClick={handleBuy}>
            Buy Now
          </button>
        </div>
      </div>
    </article>
  );
}
