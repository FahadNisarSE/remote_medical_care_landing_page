"use client"

import ServiceCard from "@/components/ServiceCard";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { SERVICES } from "@/lib/constant";
import { useInViewState } from "@/lib/store";
import { useRef } from "react";

export default function Services() {
  const update = useInViewState((state) => state.update);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(sectionRef, {
    threshold: 0.3,
  });
  const isVisible = !!entry?.isIntersecting;

  if (isVisible) update("#service");

  return (
    <section
      ref={sectionRef}
      className="lg:mt-36 sm:mt-28 mt-20 flex flex-col md:gap-10 gap-7 items-center text-center"
      id="service"
    >
      <div className="space-y-2">
        <h3 className="lg:text-2xl text-center lg:leading-[48px] text-primary text-xl font-semibold text-balance">
          Services
        </h3>
        <h2 className="lg:text-5xl lg:leading-tight text-3xl font-bold bg-clip-text text-transparent bg-gradient  text-balance max-w-screen-md">
          Innovative Solutions for Your Health Journey
        </h2>
      </div>
      <p className="sm:text-[17px] sm:leading-loose leading-normal text-sm text-balance max-w-screen-md text-center">
        Remote Medical Care redefines digital health care with its unique
        approach, ensuring comprehensive and accessible medical services.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.title + index} service={service} />
        ))}
      </div>
    </section>
  );
}
