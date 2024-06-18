import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import MainHeader from "../mainHeader/MainHeader";
import "./main.css";

function Main({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`flexcolum main ${theme}`}>
      <MainHeader />

      {children}
    </main>
  );
}

export default Main;
