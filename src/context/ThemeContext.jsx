import React, { createContext, useContext, useMemo, useState } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

export const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const useColorTheme = () => {
  const [mode, setMode] = useState("dark");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return {
    theme,
    toggleColorMode,
  };
};

export const ThemeProvider = ({ children }) => {
  const value = useColorTheme();

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={value.theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
