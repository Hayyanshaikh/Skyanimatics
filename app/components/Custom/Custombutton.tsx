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

  return (
    <Button
      variant={variant === "gradient" ? "default" : variant}
      onClick={onClick}
      className={cn(
        "custom-button h-14 rounded-[10px] cursor-pointer text-[16px]",
        customVariant,
        className,
      )}
    >
      {children}
    </Button>
  );
}
