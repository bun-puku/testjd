import React from "react";
import { Link } from "react-router-dom";

export default function NavLinkButton({ to, children }) {
  return (
    <Link to={to} className="button button-cta">
      {children}
    </Link>
  );
}
