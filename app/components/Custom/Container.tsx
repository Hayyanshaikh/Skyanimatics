import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`
        w-full mx-auto h-full
        px-4 md:px-6
        max-w-93.75
        sm:max-w-160
        md:max-w-3xl
        lg:max-w-5xl
        xl:max-w-7xl
        2xl:max-w-360.25
        ${className ?? ""}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
