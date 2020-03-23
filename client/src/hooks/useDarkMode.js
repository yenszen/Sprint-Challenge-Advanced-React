import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

function useDarkMode(initialValue) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);

  useEffect(() => {
    const body = document.querySelector("body");
    darkMode
      ? body.classList.add("darkMode")
      : body.classList.remove("darkMode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
}

export default useDarkMode;