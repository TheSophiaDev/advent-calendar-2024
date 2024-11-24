import React from "react";
import { CarouselItem } from "@/components/ui/carousel"
import { DayCard } from "./day-card"

interface DayCarouselItemProps {
  day: number;
  key: number;
}

export function DayCarouselItem(props: DayCarouselItemProps): JSX.Element {
  return (
    <CarouselItem key={props.key}>
           <DayCard day={props.day} />
    </CarouselItem>
  );
}
