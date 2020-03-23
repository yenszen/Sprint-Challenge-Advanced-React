import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="navbar">
      <h1>Women's World Cup Most Searched Players</h1>
      <div className="darkMode-toggle">
        <button onClick={toggleMode}>Dark Mode</button>
      </div>
    </div>
  );
};

export default NavBar;
