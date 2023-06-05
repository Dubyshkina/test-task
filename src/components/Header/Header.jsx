import s from "./Header.module.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link to="/" className={s.link}>
          <button type="button" className={s.btn_home}>Home</button>
        </Link>
        <Link to="/tweets" className={s.link}>
          <button type="button" className={s.btn_tweets}>Tweets</button>
        </Link>
      </nav>
    </header>
  );
};
export default Header;
