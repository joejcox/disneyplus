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
        <p>{children}</p>
      </div>
    </section>
  );
};

export default ImageTextSection;