import React from "react";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={`${styles["home-page"]} df fdc jcc aic`}>
      <section className={`${styles["home-banner"]} dfull`}>
        <div>
          <h1>
            Et la boucle est <span>bouclée</span> !
          </h1>
          <h3>Bonjour cher internaute !</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        <div className={styles["image-container"]}>
          <img src={require("../assets/home-bg.png")} alt="Logo" />
        </div>
      </section>

      <section className={`${styles["home-content"]} df fdc jcc aic`}>
        <svg
          className={styles.wave}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#e7eaf6"
            fillOpacity="1"
            d="M0,64L120,53.3C240,43,480,21,720,26.7C960,32,1200,64,1320,80L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>

        <h3>Apprendre</h3>
      </section>
    </div>
  );
}

export default Home;
