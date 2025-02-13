import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles["nav-container"]} dfull`}> 
      <img className={styles.logo} src={require("../assets/logo.png")} alt="Logo" />        
      <ul className="dfull">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/For">For</Link>
        </li>
        <li>
          <Link to="/While">While</Link>
        </li>
        <li>
          <Link to="/Do-while">Do...while</Link>
        </li>
        <li>
          <Link to="/For-in">For...in</Link>
        </li>
        <li>
          <Link to="/For-of">For...of</Link>
        </li>
        <li>
          <Link to="/Foreach">Foreach</Link>
        </li>
        <li>
          <Link to="/Break-Continue">Break/Continue</Link>
        </li>
      </ul>
      </div>
      
    </nav>
  );
}

export default Navbar;
