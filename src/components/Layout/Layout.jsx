import { Outlet, Link } from "react-router-dom";

import s from "./Layout.module.scss";
const Layout = () => {
  return (
    <header>
      <nav className={s.nav}>
        <Link to="/" className={s.link}>
          <button type="button" className={s.btn}>Home</button>
        </Link>
        <Link to="/tweets" className={s.link}>
          <button type="button" className={s.btn}>Tweets</button>
        </Link>
      </nav>
      <Outlet />
    </header>
  );
};

export default Layout;