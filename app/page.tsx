import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { Check } from "lucide-react";
import { PriceChange } from "@/components/price-change";
import { DarkThemeButton } from "@/components/dark-theme-button";

export default function Home() {
  return (
    <>
      <DarkThemeButton />
      <main>
        <Image
          src="/images/bg-pattern.svg"
          alt="background-pattern"
          width={1920}
          height={1080}
          className="absolute top-0 -z-10 md:h-1/2 h-96 bg-style dark-mode"
        />
        <section className="text-center my-20 relative space-y-2">
          <Image
            src="/images/pattern-circles.svg"
            alt="background-circles"
            width={1024}
            height={1024}
            className="absolute size-48 top-10 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
          />
          <h1 className="md:text-4xl text-2xl font-bold antialiased dark:text-white">
            Simple, traffic-based pricing
          </h1>
          <div className="md:flex md:justify-center md:text-lg font-semibold text-gray-400 text-sm">
            <p>Sign-up for our 30-day trial.</p>
            <p>No credit card required.</p>
          </div>
        </section>
        <section className="text-gray-400 font-medium text-center">
          <article className="m-8 flex flex-col gap-10 shadow-xl p-10 rounded z-10 bg-white dark:bg-[#242526] dark:text-white text-black w-96 md:w-[42rem] mx-auto ">
            <PriceChange />
            <div className="flex text-sm font-semibold gap-2 md:ml-28 justify-center items-center">
              <p>Month Billing</p>
              <Switch className="" />
              <p>Yearly Billing </p>
              <span className="hidden md:block bg-[#FFEDE7] px-2 py-1 text-sm rounded-full font-bold text-[#E79D86]">
                25% Discount
              </span>
              <span className="md:hidden bg-[#FFEDE7] px-2 py-1 text-sm rounded-full font-bold text-[#E79D86]">
                -25%
              </span>
            </div>
            <Separator />
            <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
              <ul className="flex flex-col md:items-start gap-2 items-center font-semibold text-sm">
                <li className="flex gap-4 items-center">
                  <Check className="text-[#44C7B7] size-3" />
                  <p> Unlimited websites</p>
                </li>
                <li className="flex gap-4 items-center">
                  <Check className="text-[#44C7B7] size-3" />
                  <p> 100% data ownership</p>
                </li>
                <li className="flex gap-4 items-center">
                  <Check className="text-[#44C7B7] size-3" />
                  <p> Email reports</p>
                </li>
              </ul>
              <Button className="bg-[#293356] px-10 rounded-full w-fit">
                Start my trial
              </Button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
