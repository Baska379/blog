import css from "/styles/GridItem.module.scss";

const GridItem = () => {
  return (
    <div className={css.GridItem}>
      <div className={css.Card}>
        <div className={css.header}>
          <img src="img1.jpg" alt="" />
          <div>
            <h3>BaasanSuren</h3>
            <p>program</p>
          </div>
        </div>
        <div className={css.context}>
          <img src="img.jpg" alt="" />
          <h5>JAMstack about</h5>
          <p>status Site</p>
        </div>
      </div>
      <div className={css.Card1}>
        <div className={css.header}>
          <img src="img1.jpg" alt="" />
          <div>
            <h3>BaasanSuren</h3>
            <p>program</p>
          </div>
        </div>
        <div className={css.context}>
          <img src="img.jpg" alt="" />
          <h5>JAMstack about</h5>
          <p>status Site</p>
        </div>
      </div>
      <div className={css.Card2}>
        <div className={css.header}>
          <img src="img1.jpg" alt="" />
          <div>
            <h3>BaasanSuren</h3>
            <p>program</p>
          </div>
        </div>
        <div className={css.context}>
          <img src="img.jpg" alt="" />
          <h5>JAMstack about</h5>
          <p>status Site</p>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
