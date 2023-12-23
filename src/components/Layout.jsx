import React from "react";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Footer from "./Footer";
import { useThemeContext } from "../context/themeContext";

const Layout = () => {
  const { theme } = useThemeContext();
  return (
    <div
      style={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        color: theme.palette.text.primary,
      }}
    >
      <Navbar />
      <Herosection />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
