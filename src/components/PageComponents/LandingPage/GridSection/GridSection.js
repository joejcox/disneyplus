import styles from "./GridSection.module.css";

const GridSection = ({ children, title, images }) => {
  const renderImages = images.map(({ image, alt }) => {
    return (
      <div className={styles.grid_item} key={alt}>
        <img src={image} alt={alt} />
      </div>
    );
  });
  return (
    <section className={styles.grid_section}>
      <h3 className="heading">{title}</h3>
      <p>{children}</p>
      <div className={styles.grid}>{renderImages}</div>
    </section>
  );
};

export default GridSection;
