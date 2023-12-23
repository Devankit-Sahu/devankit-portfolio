import React from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "../context/themeContext";

const Navbar = () => {
  const { theme, toggleColorMode } = useThemeContext();
  return (
    <div className="absolute z-10 w-full">
      <div className="flex justify-between max-w-[1200px] mx-auto py-10">
        <div>
          <h2 className="text-5xl text-[#d00d32] font-[700] tracking-[1.4px]">
            Devankit<span className="text-[#761dd0]">.</span>
          </h2>
        </div>
        <ul className="flex gap-x-10">
          <li className="text-xl tracking-[.6px] cursor-pointer text-purple-600 hover:text-purple-500">
            Home
          </li>
          <li className="text-xl tracking-[.6px] cursor-pointer text-purple-600 hover:text-purple-500">
            Work
          </li>
          <li className="text-xl tracking-[.6px] cursor-pointer text-purple-600 hover:text-purple-500">
            Skills
          </li>
          <li className="text-xl tracking-[.6px] cursor-pointer text-purple-600 hover:text-purple-500">
            About
          </li>
          <li className="text-xl tracking-[.6px] cursor-pointer text-purple-600 hover:text-purple-500">
            Contact
          </li>
          <li>
            <IconButton
              sx={{ color: "text.primary" }}
              onClick={toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
