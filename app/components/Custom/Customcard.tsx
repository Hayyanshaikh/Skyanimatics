import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface CustomCardProps {
  icon?: string;
  title: string;
  description: string;
  className?: string;
}

export default function CustomCard({
  icon,
  title,
  description,
  className,
}: CustomCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="items-center text-center">
        {icon && (
          <Image
            src={icon}
            alt={title}
            width={48}
            height={48}
            className="mb-3"
          />
        )}
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground text-center">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
