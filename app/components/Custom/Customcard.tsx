import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
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
    <Card
      className={cn(
        "!gap-0 !rounded-t-[20px] !rounded-b-[40px]",
        "pb-8 sm:pb-9 md:pb-11.75",
        "px-4 sm:px-5",
        className,
      )}
    >
      <CardHeader className="items-center p-0 pt-6 text-center sm:pt-7 md:pt-8">
        {icon && (
          <div className="relative mx-auto h-24 w-24 sm:h-28 sm:w-28 md:h-[118px] md:w-[118px]">
            <Image src={icon} alt={title} fill className="object-contain" />
          </div>
        )}

        <CardTitle className="mt-4 text-xl leading-tight sm:mt-5 sm:text-[22px] md:mt-6 md:text-2xl">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0 pt-3 sm:pt-1.5">
        <p className="text-center text-sm leading-5 text-muted-foreground sm:text-base sm:leading-6">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
