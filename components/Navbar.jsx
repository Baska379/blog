import Link from "next/link";
import css from "../styles/Navbar.module.scss";
const Navbar = () => {
  return (
    <div className={css.Navbar}>
      <Link href="1234.mn">
        <a className={css.link}>1234.mn</a>
      </Link>
      <Link href="1234.mn">
        <a className={css.link1}>Нүүр</a>
      </Link>
    </div>
  );
};

export default Navbar;
