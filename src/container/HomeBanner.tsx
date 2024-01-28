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
import bannerImage3 from "@/../public/banner_img_3.webp";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useInViewState } from "@/lib/store";
import { useRef } from "react";

const CarouselData = [
  {
    image: bannerImage2,
    altText: "RMC interface with doctor",
  },
  {
    image: bannerImage3,
    altText: "RMC interface with patient",
  },
  {
    image: bannerImage1,
    altText: "women using RMC throught table",
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
    <div className="bg-alternate_bg">
      <section
        ref={sectionRef}
        className="grid md:grid-cols-2 items-center max-w-[1200px] px-8 mx-auto lg:py-16 sm:py-14 py-10 md:min-h-screen lg:gap-10 gap-7"
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
          <p className="sm:text-[17px] leading-loose text-sm text-balance max-w-screen-md sm:text-left text-center">
            Remote Medical Care leads the healthcare frontier, bridging gaps,
            empowering patients, and connecting professionals globally. With an
            innovative digital health approach, it revolutionizes medical
            service delivery for comprehensive and accessible care, promising a
            seamless experience.
          </p>
          <div className="flex flex-wrap md:justify-start justify-center gap-4">
            <Link
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "lg",
                  className:
                    "place-items-center grid tracking-widest font-semibold",
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
                    "place-items-center grid tracking-widest font-semibold",
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
          className="relative"
        >
          {/* <div className="gradient-02 absolute left-1/2 top-1/2 opacity-70 pointer-events-none z-10 w-1/2 h-1/2" /> */}
          <CarouselContent>
            {CarouselData.map(({ image, altText }) => (
              <CarouselItem key={altText}>
                <Image
                  src={image}
                  alt={altText}
                  width={320}
                  height={380}
                  className="mx-auto object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
}
