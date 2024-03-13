import React, { useState } from "react";
import HoverMenu from "../hovermenu/hovermenu";

export default function TextButton({
  buttonName,
  isBorder,
  isHoveredHandler,
  noHoveredHandler,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [showWindowMenu, setShowWindowMenu] = useState(false);

  // console.log("isHoveredHandler", isHoveredHandler);
  // const isHoveredHandler = (e) => {
  //   console.log("is_e", e);
  //   setIsHovered(true);
  // };

  // const noHoveredHandler = (e) => {
  //   console.log("no_e", e);
  //   setIsHovered(false);
  // };

  return (
    <>
      <button
        onMouseEnter={isHoveredHandler}
        onMouseLeave={noHoveredHandler}
        className={`w-auto h-[60px] text-center px-3 ${
          isBorder ? "border-r-2 border-red-500" : "border-2"
        }`}
      >
        {buttonName}
      </button>
    </>
  );
}
