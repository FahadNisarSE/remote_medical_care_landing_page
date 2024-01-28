"use client";

import Image, { StaticImageData } from "next/image";
import howItWorks1 from "@/../public/how_it_works_1.png";
import howItWorks2 from "@/../public/how_it_works_2.jpg";
import howItWorks3 from "@/../public/how_it_works_3.png";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useInViewState } from "@/lib/store";

const CONSULTATION_STEPS = [
  {
    title: "Telemedicine Unveiled",
    description:
      "Telemedicine, harnessing technology like video calls and online portals, brings healthcare straight to you—a boon for busy professionals, residents with limited mobility, and those in nursing houses. It provides essential services like virtual consultations, remote monitoring, and even admissions, eliminating travel hassles and bridging healthcare gaps. This becomes crucial during outbreaks, epidemics, or in any situation where traditional access is limited, ensuring everyone gets the care they need, without leaving their homes.",
    image: howItWorks1,
  },
  {
    title: "Healthcare Challenges",
    description:
      "The World Health Organization (WHO) highlights a critical global shortage, amounting to 4.3 million physicians, nurses, and health professionals. This scarcity poses a significant challenge in delivering accessible and timely medical care, emphasizing the urgent need for innovative solutions like Remote Medical Care.",
    image: howItWorks2,
  },
  {
    title: "HealthCare Solutions at Your Fingertips",
    description:
      "Discover 24/7 access to medical expertise through video calls. Connect with local physicians, book online consultations from home, and experience consistent, cutting-edge care tailored to your needs. We value your time, providing punctual service without compromising personalized attention. Your medical health is our priority.",
    image: howItWorks3,
  },
];

type HowItWorksProps = {
  data: {
    title: string;
    description: string;
    image: StaticImageData;
  };
  index: number;
};

export default function HowItWorks() {
  const update = useInViewState((state) => state.update);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(sectionRef, {
    threshold: 0.3,
  });
  const isVisible = !!entry?.isIntersecting;

  if (isVisible) update("#healthcare");

  return (
    <section
      ref={sectionRef}
      className={`md:space-y-10 space-y-7`}
      id="healthcare"
    >
      <div className="space-y-2 max-w-[1200px] px-8 mx-auto lg:py-16 sm:py-14 py-10">
        <h3 className="lg:text-2xl text-center lg:leading-[48px] text-primary text-xl font-semibold text-balance">
          Healthcare Triad
        </h3>
        <h2 className="lg:text-5xl text-center mx-auto lg:leading-tight text-3xl font-bold bg-clip-text text-transparent bg-gradient text-balance max-w-screen-md">
          Telemedicine, Challenges and Solution
        </h2>
      </div>
      {CONSULTATION_STEPS.map((item, index) => (
        <HowItWorksCard key={item.title} data={item} index={index} />
      ))}
    </section>
  );
}

export function HowItWorksCard({ data, index }: HowItWorksProps) {
  return (
    <div className={`${index % 2 !== 0 ? "bg-alternate_bg" : ""}`}>
      <section
        className={`flex flex-col items-center md:gap-10 gap-7 max-w-[1200px] px-8 mx-auto lg:py-16 sm:py-14 py-10 ${
          index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="flex flex-col md:gap-10 gap-7 md:basis-1/2 text-left max-w-screen-md">
          <div className="space-y-2">
            <h3 className="lg:text-2xl lg:leading-[48px] text-primary text-xl font-semibold text-balance">
              0{index + 1}.
            </h3>
            <h2 className="lg:text-4xl lg:leading-tight text-3xl font-bold bg-clip-text text-transparent bg-gradient text-balance max-w-screen-md">
              {data.title}
            </h2>
          </div>
          <p className="sm:text-[17px] leading-loose text-sm text-balance">
            {data.description}
          </p>
        </div>
        <Image
          src={data.image}
          alt={data.title}
          width={500}
          height={500}
          className="md:ml-auto aspect-square object-cover object-center rounded-full md:basis-1/2"
        />
      </section>
    </div>
  );
}
