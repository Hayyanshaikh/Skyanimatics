import React from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

const PlayButton = ({
  color,
  align = "center",
  size = 95,
}: {
  color?: string;
  align?: "left" | "right" | "center";
  size?: number;
}) => {
  const buttonColor = color || "#5454D4";

  // 95px outer -> 59.05px inner
  const outer = 100;
  const second = 90.54;
  const third = 81.08;
  const fourth = 71.62;
  const play = 62.16;

  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className={cn(
        "absolute top-full -translate-y-1/2 flex items-center justify-center",
        align === "center" && "left-1/2 -translate-x-1/2",
        align === "left" && "left-4",
        align === "right" && "right-4",
      )}
    >
      {/* Outer */}
      <div
        style={{
          width: `${outer}%`,
          height: `${outer}%`,
          backgroundColor: buttonColor,
          opacity: 0.05,
        }}
        className="absolute rounded-full"
      />

      {/* 2nd */}
      <div
        style={{
          width: `${second}%`,
          height: `${second}%`,
          backgroundColor: buttonColor,
          opacity: 0.1,
        }}
        className="absolute rounded-full"
      />

      {/* 3rd */}
      <div
        style={{
          width: `${third}%`,
          height: `${third}%`,
          backgroundColor: buttonColor,
          opacity: 0.3,
        }}
        className="absolute rounded-full"
      />

      {/* 4th */}
      <div
        style={{
          width: `${fourth}%`,
          height: `${fourth}%`,
          backgroundColor: buttonColor,
          opacity: 0.5,
        }}
        className="absolute rounded-full"
      />

      {/* Play Button */}
      <div
        style={{
          width: `${play}%`,
          height: `${play}%`,
          backgroundColor: buttonColor,
        }}
        className="relative flex items-center justify-center rounded-full"
      >
        <Play
          fill="white"
          stroke="white"
          style={{
            width: "40%",
            height: "40%",
          }}
        />
      </div>
    </div>
  );
};

export default PlayButton;
