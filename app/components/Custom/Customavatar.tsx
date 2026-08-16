import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CustomAvatarProps {
  src?: string;
  name: string;
  className?: string;
}

export default function CustomAvatar({
  src,
  name,
  className,
}: CustomAvatarProps) {
  const fallback = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Avatar className={className}>
      {src && <AvatarImage src={src} alt={name} />}
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
