import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggle = () => setDarkMode(!darkMode);
  return (
    <ThemeContext.Provider value={{ darkMode, toggle }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
