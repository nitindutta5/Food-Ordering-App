import styles from "./Header.module.css";

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
          <a key={item.id} href={item.url}>
          <li>{item.name}</li>
          </a>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Header;
