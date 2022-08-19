import css from "/styles/Intro.module.scss";

const Intro = () => {
  return (
    <div className={css.Intro}>
      <img src="logo.jpg" alt="" />
      <div className={css.context}>
        <h5>1234.mn Online videa сургалт</h5>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          illo eius libero. Repellat minus nostrum reprehenderit pariatur ipsam,
          soluta officiis!
        </p>
      </div>
    </div>
  );
};

export default Intro;
