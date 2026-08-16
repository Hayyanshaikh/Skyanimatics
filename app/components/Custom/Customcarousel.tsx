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
}

export default function CustomCarousel({
  items,
  showControls = true,
}: CustomCarouselProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {items.map((item, i) => (
          <CarouselItem key={i} className="basis-1/2 md:basis-1/4">
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
