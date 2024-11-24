import React from "react";
import Link from "next/link";
import { isValidDay } from "@/lib/guards";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card"

export function DayCard (props: { day: number }): JSX.Element {
  const day = props.day;
  if (isValidDay(day) === true) {
    return (
      <div className="p-1">
        <Link
          href={`/day/${day}`}
        >
          <Card className="bg-cover bg-red-700 border-0 bg-[url(/images/christmas-red.png)] bg-center">
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-9xl font-christmas text-white">{day}</span>
            </CardContent>
          </Card>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-1">
      <Card className="bg-cover bg-red-700 border-0 bg-[url(/images/christmas-red.png)] bg-center">
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <span className="text-9xl font-christmas text-white">{day}</span>
        </CardContent>
      </Card>
    </div>
  );
}
