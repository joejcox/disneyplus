import Logo from "../Logo/Logo";
import FooterLinks from "./FooterLinks/FooterLinks";
import styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date();
  const currentDate = date.getFullYear();
  return (
    <footer className={styles.footer}>
      <Logo />
      <FooterLinks /> ©{currentDate} Disney and its related entities. All Rights
      Reserved.
    </footer>
  );
};

export default Footer;
