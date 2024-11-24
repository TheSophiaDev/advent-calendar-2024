import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { DayCarouselItem } from "./day-carousel-item.tsx"


export default function DaysCarousel(): JSX.Element {
  return (
    <div className="xl:w-2/4 md:w-2/4 l:w-2/4">
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 24 }, (_, i) => (
            <DayCarouselItem day={i + 1} key={i} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-green-900 text-white border-green-900" />
        <CarouselNext className="bg-green-900 text-white border-green-900" />
      </Carousel>
    </ div>
  );
}
