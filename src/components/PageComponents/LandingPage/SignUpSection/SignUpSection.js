import ButtonLink from "../../../Button/ButtonLink";
import styles from "./SignUpSection.module.css";

const SignUpSection = () => {
  return (
    <section className={styles.sign_up}>
      <ButtonLink route="/" large>
        Sign up now
      </ButtonLink>
    </section>
  );
};

export default SignUpSection;
