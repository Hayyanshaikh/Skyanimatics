import { cn } from "@/lib/utils";

interface CustomHeadingProps {
  line1: string;
  line2?: string;
  description?: string;
  line2ClassName?: string;
  className?: string;
  align?: "center" | "left";
}

export default function CustomHeading({
  line1,
  line2,
  description,
  line2ClassName,
  className,
  align = "center",
}: CustomHeadingProps) {
  return (
    <div
      className={cn(
        "mb-5",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      <h2 className="text-3xl md:text-[55px] font-semibold text-gray-900">
        {line1}
      </h2>
      {line2 && (
        <h2
          className={cn(
            "text-3xl md:text-[55px] font-semibold text-gradient mt-1",
            line2ClassName,
          )}
        >
          {line2}
        </h2>
      )}
      {description && (
        <p className="text-sm md:text-base text-gray-500 mt-4 max-w-[578.27px] mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
