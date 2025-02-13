import React from "react";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={`${styles["home-page"]} df aic jcc`}>
      <section className={`${styles["home-banner"]} dfull`}>
        <div>
          <h1>Et la boucle est bouclée !</h1>
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
    </div>
  );
}

export default Home;
