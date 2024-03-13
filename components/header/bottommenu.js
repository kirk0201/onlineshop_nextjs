"use client";
import React, { useState } from "react";
import TextButton from "../button/textbutton";
import HoverMenu from "../hovermenu/hovermenu";

export default function BottomMenu({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  const menuName = [];
  const isHoveredHandler = (e) => {
    console.log("e", e);
    setIsHovered(true);
  };

  const noHoveredHandler = (e) => {
    setIsHovered(false);
  };
  return (
    <div className="w-full h-[60px]">
      <TextButton
        isHoveredHandler={isHoveredHandler}
        noHoveredHandler={noHoveredHandler}
        buttonName="전체/카테고리"
      />
      <TextButton buttonName="IT·프로그래밍" />
      <TextButton buttonName="디자인" />
      <TextButton buttonName="마케팅" />
      <TextButton buttonName="세무·법무·노무" />
      <TextButton buttonName="전자책·VOD" isBorder={true} />

      <div className="inline-block">
        <TextButton
          isHoveredHandler={isHoveredHandler}
          noHoveredHandler={noHoveredHandler}
          buttonName="상위 2% Prime"
        />
        <TextButton buttonName="포트폴리오" />
        <TextButton buttonName="프리랜서클럽" />
        <TextButton buttonName="#신년운세" />
      </div>

      {isHovered && <HoverMenu />}
      {children}
    </div>
  );
}
