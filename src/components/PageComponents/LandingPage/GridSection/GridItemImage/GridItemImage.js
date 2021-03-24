import styles from "./GridItemImage.module.css";

const GridItemImage = ({ image, alt }) => {
  return (
    <div className={styles.grid_item} key={alt}>
      <img src={image} alt={alt} />
    </div>
  );
};

export default GridItemImage;
