import React from "react";
import { Layout } from "./components";
import { ThemeProvider, useThemeContext } from "./context/themeContext";
const App = () => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
