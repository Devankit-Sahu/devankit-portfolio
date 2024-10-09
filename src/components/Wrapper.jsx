import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div className={`container mx-auto px-10 xl:px-40 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
