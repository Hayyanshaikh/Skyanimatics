import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface CustomSeparatorProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export default function CustomSeparator({
  className,
  orientation = "horizontal",
}: CustomSeparatorProps) {
  return (
    <Separator orientation={orientation} className={cn("my-6", className)} />
  );
}
