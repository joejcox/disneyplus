import styles from "./ButtonLink.module.css";
import classnames from "classnames";

const Button = ({
  children,
  outline,
  large,
  block,
  gradient,
  type,
  extraStyles,
}) => {
  const buttonClass = classnames({
    [styles.button]: true,
    [styles.block]: block,
    [styles.gradient]: gradient,
    [styles["button--primary"]]: !outline,
    [styles["button--outline"]]: outline,
    [styles["button--large"]]: large,
  });

  return (
    <button type={type && type} className={buttonClass} style={extraStyles}>
      {children}
    </button>
  );
};

export default Button;
