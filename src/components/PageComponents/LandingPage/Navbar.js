import styles from "./styles.module.css";
import ButtonLink from "../../Button/ButtonLink";
import classnames from "classnames";

const Navbar = ({ scrolled }) => {
  console.log(`not scrolled down: ${!scrolled}`);
  const classes = classnames({
    [styles.nav_landing]: true,
    [styles.hide]: scrolled,
  });

  return (
    <nav className={classes}>
      <div className={styles["nav_landing--right"]}>
        <ButtonLink route="/" outline>
          LOG IN
        </ButtonLink>
      </div>
    </nav>
  );
};

export default Navbar;
