import { cn } from "@/lib/utils";
import Image from "next/image";

interface CustomHeadingProps {
  line1: string;
  line2?: string;
  description?: string;
  line2ClassName?: string;
  className?: string;
  align?: "center" | "left";
  reverse?: boolean;
  lineBarClassName?: string;
  lineBar?: boolean;
}

export default function CustomHeading({
  line1,
  line2,
  description,
  line2ClassName,
  className,
  align = "center",
  lineBarClassName,
  lineBar = false,
  reverse,
}: CustomHeadingProps) {
  return (
    <div
      className={cn(
        "mb-5 flex flex-col justify-center",
        align === "center"
          ? "text-center items-center"
          : "text-left items-start",
        className,
      )}
    >
      <div className={cn("flex", reverse ? "flex-col-reverse" : "flex-col")}>
        <h2 className="text-3xl md:text-[55px] font-semibold text-gray-900">
          {line1}
        </h2>
        {line2 && (
          <h2
            className={cn(
              "relative text-3xl md:text-[55px] font-semibold text-gradient",
              line2ClassName,
              reverse ? "mb-1" : "mt-1",
            )}
          >
            {line2}
            {lineBar && (
              <Image
                src="/icons/heading-line.svg"
                alt="Heading Line"
                height={18}
                width={268}
                className={cn(
                  "absolute w-44 sm:w-56 lg:w-67 h-auto max-w-full lg:block hidden",
                  lineBarClassName,
                )}
              />
            )}
          </h2>
        )}
      </div>
      {description && (
        <p className="text-sm md:text-base text-gray-500 mt-4 max-w-[578.27px]">
          {description}
        </p>
      )}
    </div>
  );
}
