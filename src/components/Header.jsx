import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="logo" to="/">
          <span style={{ fontSize: "22px" }}>🍰</span>
          <span className="brand">Cakeshop</span>
        </Link>

        <nav className="main-nav">
          <NavLink to="/" className="nav-link" end>
            Home
          </NavLink>
          <NavLink to="/gallery" className="nav-link">
            Gallery
          </NavLink>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <button
          className="nav-toggle"
          aria-expanded={open}
          onClick={() => {
            setOpen(!open);
            document.dispatchEvent(new CustomEvent("toggleMenu"));
          }}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
