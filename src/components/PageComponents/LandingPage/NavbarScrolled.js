import styles from "./styles.module.css";
import ButtonLink from "../../Button/ButtonLink";
import classnames from "classnames";
import Logo from "../../Logo/Logo";
import { Link } from "react-router-dom";

const NavbarScrolled = ({ scrolled }) => {
  const classes = classnames({
    [styles.nav_landing]: true,
    [styles.hide]: !scrolled,
  });

  return (
    <nav className={`${classes} ${styles.has_bg}`}>
      <div className={styles["nav_landing--left"]}>
        <Link className={styles.logo_container} to="/">
          <Logo />
        </Link>
      </div>
      <div className={styles["nav_landing--right"]}>
        <ButtonLink route="/sign-up">Sign Up Now</ButtonLink>
        <ButtonLink outline route="/sign-in">
          Log In
        </ButtonLink>
      </div>
    </nav>
  );
};

export default NavbarScrolled;
