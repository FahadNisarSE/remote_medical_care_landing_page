"use client";

import Image from "next/image";
import DentalPatients from "@/../public/about_us_image.png";
import { Check } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useInViewState } from "@/lib/store";
import { useRef } from "react";

const KeyPoints = [
  {
    title: "Integrated Solutions",
    description:
      "Offering a seamless blend of AI, diagnostics, and telemedicine for a holistic health care experience.",
  },
  {
    title: "All-in-One Application",
    description:
      "Offering a seamless blend of AI, diagnostics, and telemedicine for a holistic health care experience.",
  },
  {
    title: "Patient-Centric Approach",
    description:
      "Prioritizing patient satisfaction, experience,and personalized care for optimal health outcomes.",
  },
];

export default function AboutUs() {
  const update = useInViewState((state) => state.update);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(sectionRef, {
    threshold: 0.3,
  });
  const isVisible = !!entry?.isIntersecting;

  if (isVisible) update("#about");

  return (
    <section
      ref={sectionRef}
      className="lg:mt-36 sm:mt-28 mt-20 grid md:grid-cols-2 md:gap-10 gap-7 items-center"
      id="about"
    >
      <div className="flex flex-col md:gap-10 gap-7">
        <div className="space-y-2">
          <h3 className="lg:text-2xl lg:leading-[48px] text-primary text-xl font-semibold text-balance text-left">
            About us
          </h3>
          <h2 className="lg:text-5xl lg:leading-tight text-3xl font-bold bg-clip-text text-transparent bg-gradient text-balance max-w-screen-md text-left">
            Who we are?
          </h2>
        </div>
        <p className="sm:text-[17px] text-sm sm:leading-loose leading-normal text-balance max-w-screen-md text-left">
          Telemedicine, within the broader scope of telematics, transforms
          healthcare with electronic tools for diagnostics and therapy. It
          enables remote patient-clinician interactions, offering a range of
          services from consultations to monitoring. In parallel, remote medical
          care takes this innovation further, connecting professionals and
          patients worldwide. Committed to inclusivity and accessibility, it
          ensures seamless, comprehensive healthcare solutions, embodying the
          future of medical services.
        </p>
        <ul className="flex-col gap-5 flex">
          {KeyPoints.map((item) => (
            <li key={item.title} className="flex items-start gap-4 font-light">
              <Check className="min-w-6 h-6 text-white bg-gradient p-1 rounded-full" />
              <p className="sm:text-base text-sm sm:leading-7 sm:text-balance">
                <strong className="font-semibold">{item.title}:</strong>
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={DentalPatients}
        alt="Dental Care Patients"
        width={445}
        height={523}
        className="md:ml-auto object-contain"
      />
    </section>
  );
}
