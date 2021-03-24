import styles from "./ImageTextSection.module.css";
import classnames from "classnames";

const ImageTextSection = ({
  children,
  image,
  alt,
  title,
  imageRight,
  span,
}) => {
  const alignClass = classnames({
    landingSection: true,
    [styles.image_text]: true,
    [styles.image_right]: imageRight,
  });

  return (
    <section className={alignClass}>
      <figure className={styles.image}>
        <img src={image} alt={alt} />
      </figure>
      <div className={styles.text_content}>
        <h3>
          {title}
          {span && <span>{span}</span>}
        </h3>
        {children}
      </div>
    </section>
  );
};

export default ImageTextSection;
