import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const current_theme = localStorage.getItem("current_theme")
    ? localStorage.getItem("current_theme")
    : "light";
  const [theme, setTheme] = useState(current_theme);

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <NavBar theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
