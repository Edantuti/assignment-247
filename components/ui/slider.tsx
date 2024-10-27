"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";
import Image from "next/image";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-100 dark:bg-[#486e69]">
      <SliderPrimitive.Range className="absolute h-full bg-[#A3F3EA]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb asChild className="">
      <div className="size-10 p-2 shadow-[#11D8C5] shadow-lg rounded-full bg-[#11D8C5] flex items-center justify-center">
        <Image
          src="/images/icon-slider.svg"
          width={100}
          height={100}
          alt="icon-slider"
          className=""
        />
      </div>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
