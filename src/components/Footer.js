import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles["footer-container"]} df aic jcc`}> 
      <img className={styles.logo} src={require("../assets/logo.png")} alt="Logo" />    
      <p>Pied de page</p>    
        <a>
          <Link to="https://github.com/Wickacode">Mon Github</Link>
        </a>
      </div>
      
    </footer>
  );
}

export default Footer;
