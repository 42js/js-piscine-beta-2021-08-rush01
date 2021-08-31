import React from "react";
import { useMediaQuery } from "react-responsive";

const WrongWidth = ({ children }) => {
  const isWrongWidth = useMediaQuery({
    query: "(max-width:850px)",
  });
  return <React.Fragment>{isWrongWidth && children}</React.Fragment>;
};

const RightWidth = ({ children }) => {
  const isRightWidth = useMediaQuery({
    query: "(min-width:850px)",
  });
  return <React.Fragment>{isRightWidth && children}</React.Fragment>;
};

export { WrongWidth, RightWidth };
