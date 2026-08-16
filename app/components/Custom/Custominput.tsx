import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function CustomInput({ className, ...props }: CustomInputProps) {
  return <Input className={cn("rounded-md h-11 px-4", className)} {...props} />;
}
