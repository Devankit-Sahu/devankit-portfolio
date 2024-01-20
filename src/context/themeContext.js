import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  mode: "light",
  toggleMode: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
  return useContext(ThemeContext);
};
