import { useRef, useEffect } from "react";
import logo from "../../../../assets/images/logo.svg";
import desktopImage from "../../../../assets/images/landingpage/heroBg.jpg";
import mobileImage from "../../../../assets/images/landingpage/heroBgMobile.jpg";
import styles from "./Hero.module.css";
import ButtonLink from "../../../Button/ButtonLink";
import brandsImage from "../../../../assets/images/landingpage/footerbrands.png";

const Hero = ({ heroHeightHandler }) => {
  const refEl = useRef(null);

  useEffect(() => {
    heroHeightHandler(refEl);
  });

  return (
    <section className={styles.hero} ref={refEl}>
      <div className={styles.hero_body}>
        <div className={styles.hero_content}>
          <picture className={styles.logo_image}>
            <img src={logo} alt="disney logo" />
          </picture>
          <h1 className={styles.heading}>
            The Falcon and <span>The Winter Soldier</span>
          </h1>
          <h2 className={styles.sub_heading}>
            Stream the Original Series from Marvel Studios
          </h2>
          <div className={styles.plans}>
            <div className={styles.plan}>
              <h3 className={styles.plan_price}>
                £7.99 <span>/ month</span>
              </h3>
              <p>Subscription required.</p>
              <ButtonLink large>Sign Up Now</ButtonLink>
            </div>
            <div className={styles.plan}>
              <h3 className={styles.plan_price}>
                £79.90 <span>/ year</span>
              </h3>
              <p>Save over 15%.* Subscription required.</p>
              <ButtonLink large>Save on 12 Months</ButtonLink>
            </div>
          </div>
          <span className={styles.terms}>
            *Savings compared to 12 months of the monthly subscription price.
          </span>
        </div>

        <div className={`${styles.background_image} ${styles.desktop}`}>
          <img src={desktopImage} alt="Marvel tv show" />
        </div>
        <div className={`${styles.background_image} ${styles.mobile}`}>
          <img src={mobileImage} alt="Marvel tv show" />
        </div>
      </div>
      <footer className={styles.hero_footer}>
        <img
          className={styles.brands}
          src={brandsImage}
          alt="Disney+ originals brands"
        />
      </footer>
    </section>
  );
};

export default Hero;
