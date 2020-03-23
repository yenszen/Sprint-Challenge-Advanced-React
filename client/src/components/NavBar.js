import React, { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import useLocalStorage from "../hooks/useLocalStorage";

const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [mode, setMode] = useLocalStorage("OFF");

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    setMode(!mode)
  };

  return (
    <div className="navbar" data-testid="navbar">
      <h1>Women's World Cup Most Searched Players</h1>
      <button onClick={toggleMode} className="darkModeBtn" data-testid="darkModeBtn">
        Dark Mode {mode ? "ON" : "OFF"}
      </button>
      {/* <span data-testid="mode">Dark mode: {mode ? "ON" : "OFF"}</span> */}
    </div>
  );
};

export default NavBar;
