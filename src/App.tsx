import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar.tsx";
import React from "react";

function App() {
  const current_theme = localStorage.getItem("current_theme")
    ? localStorage.getItem("current_theme")
    : "light";
  const [theme, setTheme] = useState(current_theme);

  useEffect(() => {
    localStorage.setItem("current_theme", theme as string);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <NavBar theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
