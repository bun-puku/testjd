import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Cakeshop — all rights reserved.</p>
        <p className="muted">Handmade cakes — small batches, big smiles.</p>
      </div>
    </footer>
  );
}
