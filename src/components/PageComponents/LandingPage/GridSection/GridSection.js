import GridItemImage from "./GridItemImage/GridItemImage";
import styles from "./GridSection.module.css";

const GridSection = ({ children, title, images }) => {
  const renderImages = images.map(({ image, alt }) => {
    return <GridItemImage key={alt} image={image} alt={alt} />;
  });
  return (
    <section className={`landingSection ${styles.grid_section}`}>
      <h3 className="heading">{title}</h3>
      <p>{children}</p>
      <div className={styles.grid}>{renderImages}</div>
    </section>
  );
};

export default GridSection;
