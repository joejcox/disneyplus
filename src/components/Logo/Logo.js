import styles from "./Logo.module.css";
import logo from "../../assets/images/logo.svg";

const Logo = () => {
  return (
    <picture className={styles.logo}>
      <img src={logo} alt="disney logo" />
    </picture>
  );
};

export default Logo;
