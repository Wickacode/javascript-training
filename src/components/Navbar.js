import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/For">For</Link>
        </li>
        <li>
          <Link to="/While">While 2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
