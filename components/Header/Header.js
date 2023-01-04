import styles from "./Header.module.css";

const Header = () => {
  const Menu = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];
  return (
    <div className={styles.wrap}>
      <h1>Logo</h1>
      <ul className={styles.menu}>
        {
          Menu.map((item, id) => (
            <li key={`${item.name} ${id}`}>{item.name}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default Header;
