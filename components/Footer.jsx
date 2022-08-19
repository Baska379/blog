import css from "/styles/Footer.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={css.Footer}>
      <Link href="#">
        <p>Home</p>
      </Link>
      <Link href="#">
        <p>student</p>
      </Link>
      <Link href="#">
        <p>facebook</p>
      </Link>
    </div>
  );
};

export default Footer;
