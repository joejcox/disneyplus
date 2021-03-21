import styles from "./styles.module.css";
import ButtonLink from "../../Button/ButtonLink";
import classnames from "classnames";

const Navbar = ({ scrolled }) => {
  const classes = classnames({
    [styles.nav_landing]: true,
    [styles.hide]: scrolled,
  });

  return (
    <nav className={classes}>
      <div className={styles["nav_landing--right"]}>
        <ButtonLink outline route="/">
          LOG IN
        </ButtonLink>
      </div>
    </nav>
  );
};

export default Navbar;
