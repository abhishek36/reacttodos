import React, { useEffect, useState } from "react";
import light from "../assets/day.png";
import night from "../assets/night.png";

const Navbar = () => {
  const [theme, settheme] = useState("dark-theme");
  const toggletheme = () => {
    if (theme === "dark-theme") {
      settheme("light-theme");
    } else {
      settheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <nav>
        <div className="title ">my todo app</div>
        <div className="toggle-btn" onClick={() => toggletheme()}>
          <img src={theme === "dark-theme" ? light : night} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
