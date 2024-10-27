"use client";

import { useState } from "react";
import { Slider } from "./ui/slider";

export function PriceChange() {
  const [price, setPrice] = useState<number>(0);
  function handleValueChange(currentValue: number[]) {
    const priceValue = (currentValue[0] - 1) * 8;
    setPrice(priceValue);
  }
  return (
    <div className="p-4 md:grid md:grid-cols-2 flex flex-col grid-rows-2 place-items-center">
      <p className="uppercase text-sm font-bold tracking-widest order-1">
        100k pageviews
      </p>
      <p className="col-span-1 row-span-1 font-semibold flex items-center gap-2 md:order-2 order-3">
        <span className="md:text-5xl text-3xl font-bold text-black dark:text-white">
          ${`${price}.00`}{" "}
        </span>{" "}
        / month
      </p>
      <Slider
        min={1}
        max={5}
        onValueChange={handleValueChange}
        className="my-10 col-span-2 row-span-1 md:order-3 order-2"
      />
    </div>
  );
}
