import css from "/styles/GridItem.module.scss";
import Link from "next/link";
const GridItem = ({ post }) => {
  return (
    <div className={css.GridItem}>
      <div className={css.Card}>
        <div className={css.header}>
          <img src="img1.jpg" alt="" />
          <div>
            <h3>BaasanSuren</h3>
            <p>{post.date}</p>
          </div>
        </div>
        <Link href={post.slug}>
          <div className={css.context}>
            <img src={post.image} alt="" />
            <h5>{post.title}</h5>
            <p>{post.subtitle}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GridItem;
