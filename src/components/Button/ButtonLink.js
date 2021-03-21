import { Link } from "react-router-dom";
import styles from "./ButtonLink.module.css";
import classnames from "classnames";

const ButtonLink = ({ children, outline, route, large, block, gradient }) => {
  const buttonClass = classnames({
    [styles.button]: true,
    [styles.block]: block,
    [styles.gradient]: gradient,
    [styles["button--primary"]]: !outline,
    [styles["button--outline"]]: outline,
    [styles["button--large"]]: large,
  });

  return (
    <Link className={buttonClass} to={route}>
      {children}
    </Link>
  );
};

export default ButtonLink;
