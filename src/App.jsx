import React from "react";
import {
  CursorDot,
  Herosection,
  SocialIcons,
  ToggleButton,
} from "./components";

const App = () => {
  return (
    <>
      <div className="main">
        <Herosection />
      </div>
      <SocialIcons />
      <ToggleButton />
      <CursorDot />
    </>
  );
};

export default App;
