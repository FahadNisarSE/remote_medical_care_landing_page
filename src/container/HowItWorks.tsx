"use client";

import Image, { StaticImageData } from "next/image";
import howItWorks1 from "@/../public/how_it_works_1.jpg";
import howItWorks2 from "@/../public/how_it_works_2.jpg";
import howItWorks3 from "@/../public/how_it_works_3.jpg";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useInViewState } from "@/lib/store";

const CONSULTATION_STEPS = [
  {
    title: "Answer AI Based Questionnaire",
    description:
      "Embark on your wellness journey by effortlessly answering AI-based questions about your symptoms and concerns. Tailored just for you, our questionnaire kickstarts the personalized care you deserve.",
    image: howItWorks1,
  },
  {
    title: "Select Doctor of Your Choice",
    description:
      "Select your perfect match from our array of skilled doctors, each committed to providing top-notch care. Your well-being is in your hands, and our diverse roster ensures a match that suits your unique needs.",
    image: howItWorks2,
  },
  {
    title: "Meet With Your Doctor",
    description:
      "Seamlessly join your doctor for a virtual meeting, where your concerns take center stage. Enjoy the convenience of professional healthcare from the comfort of your own space, empowering you on your path to optimal health.",
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

  if (isVisible) update("#working");

  return (
    <section
      ref={sectionRef}
      className={`md:space-y-10 space-y-7 lg:mt-36 sm:mt-28 mt-20`}
      id="working"
    >
      <div className="space-y-2">
        <h3 className="lg:text-2xl text-center lg:leading-[48px] text-primary text-xl font-semibold text-balance">
          How it Works?
        </h3>
        <h2 className="lg:text-5xl text-center mx-auto lg:leading-tight text-3xl font-bold bg-clip-text text-transparent bg-gradient text-balance max-w-screen-md">
          Effortless Access to Quality Services
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
    <section
      className={`flex flex-col items-center md:gap-10 gap-7 lg:mt-36 sm:mt-28 mt-20 ${
        index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="flex flex-col md:gap-10 gap-7 md:basis-1/2 text-left max-w-screen-md">
        <div className="space-y-2">
          <h3 className="lg:text-2xl lg:leading-[48px] text-primary text-xl font-semibold text-balance">
            Step 0{index + 1}.
          </h3>
          <h2 className="md:text-4xl text-3xl font-bold bg-clip-text text-transparent bg-gradient text-balance max-w-screen-md">
            {data.title}
          </h2>
        </div>
        <p className="sm:text-[17px] sm:leading-loose leading-normal text-sm text-balance">
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
  );
}
