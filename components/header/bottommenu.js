"use client";
import React, { useState } from "react";
import TextButton from "../button/textbutton";
import HoverMenu from "../hovermenu/hovermenu";

export default function BottomMenu({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  const leftMenuNameArr = [
    { id: "entire", menuName: "전체/카테고리" },
    { id: "it", menuName: "IT·프로그래밍" },
    { id: "design", menuName: "디자인" },
    { id: "marketing", menuName: "마케팅" },
    { id: "law", menuName: "세무·법무·노무" },
    { id: "ebook&vod", menuName: "전자책·VOD" },
  ];
  const rightMenuNameArr = [
    { id: "prime", menuName: "상위 2% Prime" },
    { id: "portfolio", menuName: "포트폴리오" },
    { id: "freelancer", menuName: "프리랜서클럽" },
    { id: "fortune", menuName: "#신년운세" },
  ];

  const isHoveredHandler = (e) => {
    console.log("e", e);
    setIsHovered(true);
  };

  const noHoveredHandler = (e) => {
    setIsHovered(false);
  };
  return (
    <div className="w-full h-[60px]">
      {leftMenuNameArr.map((leftMenuName) => {
        return (
          <>
            {leftMenuName.menuName !== "전자책·VOD" ? (
              <TextButton
                isHoveredHandler={isHoveredHandler}
                noHoveredHandler={noHoveredHandler}
                buttonName={leftMenuName.menuName}
                key={leftMenuName.id}
              />
            ) : (
              <TextButton
                isHoveredHandler={isHoveredHandler}
                noHoveredHandler={noHoveredHandler}
                buttonName={leftMenuName.menuName}
                key={leftMenuName.id}
                isBorder={true}
              />
            )}
          </>
        );
      })}

      <div className="inline-block">
        {rightMenuNameArr.map((rightMenuName) => {
          return (
            <>
              <TextButton
                isHoveredHandler={isHoveredHandler}
                noHoveredHandler={noHoveredHandler}
                buttonName={rightMenuName.menuName}
                key={rightMenuName.id}
              />
            </>
          );
        })}
      </div>

      {isHovered && <HoverMenu />}
      {children}
    </div>
  );
}
