import styles from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const Menu = [
    {
      name: "Home",
      url: "/",
      id:"1"
    },
    {
      name: "About",
      url: "/about",
      id:"2"
    },
    {
      name: "Contact",
      url: "/contact",
      id:"3"
    },
  ];
  const [login, setLogin] = useState(false);
  return (
    <div className={styles.header}>
    <div className={styles.wrap + ` container`}>
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
        className={styles.logo}
        alt="logo"
      />
      <ul className={styles.menu}>
        {Menu.map((item) => (
          <Link key={item.id} to={item.url}>
          <li>{item.name}</li>
          </Link>
        ))}
      </ul>
      <button className="btn-noborder" onClick={()=>setLogin(!login)}>{login ? "Logout" : "Login"}</button>
    </div>
    </div>
  );
};

export default Header;
