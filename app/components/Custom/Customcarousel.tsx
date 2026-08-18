"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CustomCarouselProps {
  items: React.ReactNode[];
  showControls?: boolean;
  itemClassName?: string;
}

export default function CustomCarousel({
  items,
  showControls = true,
  itemClassName = "basis-1/2 md:basis-1/4",
}: CustomCarouselProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {items.map((item, i) => (
          <CarouselItem key={i} className={itemClassName}>
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>

      {showControls && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
}
