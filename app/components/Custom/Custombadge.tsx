import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CustomBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function CustomBadge({ children, className }: CustomBadgeProps) {
  return (
    <Badge className={cn("rounded-full px-3 py-1", className)}>
      {children}
    </Badge>
  );
}
