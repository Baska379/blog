import css from "/styles/ListItem.module.scss";

const ListItem = () => {
  return (
    <div className={css.ListItem}>
      <div className={css.header}>
        <img src="img1.jpg" alt="" />
        <div>
          <h3>BaasanSuren</h3>
          <p>program</p>
        </div>
      </div>
      <div className={css.context}>
        <h5>JAMstack about</h5>
        <p>status Site</p>
      </div>
    </div>
  );
};

export default ListItem;
