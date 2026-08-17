import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost" | "secondary" | "gradient";
  className?: string;
  onClick?: () => void;
}

export default function CustomButton({
  children,
  variant = "default",
  className,
  onClick,
}: CustomButtonProps) {
  const customVariant = variant === "gradient" ? "custom-button-gradient" : "";

  const outlineVariant = variant === "outline" ? "custom-button-outline" : "";

  return (
    <Button
      variant={variant === "gradient" ? "default" : variant}
      onClick={onClick}
      className={cn(
        // Base
        "custom-button cursor-pointer rounded-[10px]",

        // Responsive sizing
        "h-11 px-5 text-sm",
        "sm:h-12 sm:px-5 sm:text-[15px]",
        "md:h-14 md:px-6 md:text-[16px]",

        // Mobile full width if needed
        " sm:w-auto",

        customVariant,
        outlineVariant,
        className,
      )}
    >
      {children}
    </Button>
  );
}
