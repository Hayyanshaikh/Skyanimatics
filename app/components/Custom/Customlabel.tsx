import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface CustomLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

export default function CustomLabel({
  className,
  children,
  ...props
}: CustomLabelProps) {
  return (
    <Label className={cn("text-sm font-medium mb-1", className)} {...props}>
      {children}
    </Label>
  );
}
