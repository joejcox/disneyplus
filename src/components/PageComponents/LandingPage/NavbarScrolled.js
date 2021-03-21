import styles from "./styles.module.css";
import ButtonLink from "../../Button/ButtonLink";
import classnames from "classnames";
import logo from "../../../assets/images/logo.svg";

const NavbarScrolled = ({ scrolled }) => {
  const classes = classnames({
    [styles.nav_landing]: true,
    [styles.hide]: !scrolled,
  });

  return (
    <nav className={`${classes} ${styles.has_bg}`}>
      <div className={styles["nav_landing--left"]}>
        <a className={styles.logo_container} href="/">
          <img src={logo} alt="Disney+ Logo" />
        </a>
      </div>
      <div className={styles["nav_landing--right"]}>
        <ButtonLink route="/">Sign Up Now</ButtonLink>
        <ButtonLink outline route="/">
          Log In
        </ButtonLink>
      </div>
    </nav>
  );
};

export default NavbarScrolled;
