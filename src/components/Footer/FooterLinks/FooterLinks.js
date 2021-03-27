import { Link } from "react-router-dom";
import styles from "./FooterLinks.module.css";

const FooterLinks = () => {
  return (
    <div className={styles.footer_links}>
      <Link to="/legal/subscriber-agreement">Subscriber Agreement</Link>
      <Link to="/legal/privacy-policy">Privacy Policy</Link>
      <Link to="/legal/uk-&-eu-privacy-rights">EU & UK Privacy Rights</Link>
      <Link to="/legal/cookies-policy">Cookies Policy</Link>
      <Link to="/">Interest-Based Ads</Link>
      <Link to="/">Supported Devices</Link>
      <Link to="/">Help</Link>
      <Link to="/welcome/gift-subscription">Gift Disney+</Link>
      <Link to="/">Manage Preferences</Link>
      <Link to="/">About Us</Link>
    </div>
  );
};

export default FooterLinks;
