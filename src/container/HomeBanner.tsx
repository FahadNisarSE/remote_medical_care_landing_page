"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

import bannerImage1 from "@/../public/banner_img_1.png";
import bannerImage2 from "@/../public/banner_img_2.png";
import bannerImage3 from "@/../public/banner_img_3.png";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useInViewState } from "@/lib/store";
import { useRef } from "react";

const CarouselData = [
  {
    image: bannerImage1,
    altText: "women using RMC throught table",
  },
  {
    image: bannerImage2,
    altText: "RMC interface with doctor",
  },
  {
    image: bannerImage3,
    altText: "RMC interface with patient",
  },
];

export default function HomeBanner() {
  const update = useInViewState((state) => state.update);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(sectionRef, {
    threshold: 0.3,
  });
  const isVisible = !!entry?.isIntersecting;

  if (isVisible) update("#home");

  return (
    <section
      ref={sectionRef}
      className="grid md:grid-cols-2 items-center md:gap-10 gap-7 lg:mt-36 sm:mt-28 mt-20 md:min-h-[80vh]"
      id="home"
    >
      <div className="flex flex-col md:gap-10 gap-7">
        <div className="space-y-2">
          <h3 className="lg:text-2xl lg:leading-[48px] text-primary text-xl font-semibold text-balance sm:text-left text-center">
            Revolutionizing Health Care
          </h3>
          <h1 className="lg:text-7xl sm:text-6xl text-5xl font-bold bg-clip-text text-transparent bg-gradient text-balance sm:text-left text-center">
            Remote Medical Care for All
          </h1>
        </div>
        <p className="sm:text-[17px] sm:leading-loose leading-normal text-sm text-balance max-w-screen-md sm:text-left text-center">
          Remote Medical Care leads the healthcare frontier, bridging gaps,
          empowering patients, and connecting professionals globally. With an
          innovative digital health approach, it revolutionizes medical service
          delivery for comprehensive and accessible care, promising a seamless
          experience.
        </p>
        <div className="flex flex-wrap md:justify-start justify-center gap-4">
          <Link
            className={cn(
              buttonVariants({
                variant: "default",
                size: "lg",
                className:
                  "place-items-centergrid tracking-widest font-semibold",
              })
            )}
            href="#about"
          >
            About us
          </Link>
          <Link
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "place-items-center grid  tracking-widest font-semibold",
              })
            )}
            href="#contact"
          >
            Contact us
          </Link>
        </div>
      </div>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {CarouselData.map(({ image, altText }) => (
            <CarouselItem key={altText}>
              <Image
                src={image}
                alt={altText}
                width={445}
                height={523}
                className="mx-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
