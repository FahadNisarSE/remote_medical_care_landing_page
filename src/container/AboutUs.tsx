"use client";

import Image from "next/image";
import DentalPatients from "@/../public/about_us_img.png";
import { Check } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useInViewState } from "@/lib/store";
import { useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const KeyPoints = [
  {
    title: "Integrated Solutions",
    description:
      "Offering a seamless blend of AI, diagnostics, and telemedicine for a holistic health care experience.",
  },
  {
    title: "All-in-One Application",
    description:
      "Unlike competitors, Remote Medical Care combines every essential espect with a single, user-firendly application.",
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
    <div className="bg-alternate_bg">
      <section
        ref={sectionRef}
        className="max-w-[1200px] px-8 mx-auto lg:py-16 sm:py-14 py-10 md:min-h-screen grid md:grid-cols-2 md:gap-10 gap-7 items-center"
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
          <p className="sm:text-[17px] text-sm leading-loose text-balance max-w-screen-md text-left">
            Remote Medical Care (RMC) is revolutionizing healthcare, empowering
            people in rural and remote areas with the same quality of care as
            those in urban centers. Forget long commutes and crowded clinics -
            our personalized healthcare facilities come directly to you, via
            your mobile phone. Built on cutting-edge technology like IoT
            devices, we diagnose and treat you right in your home. Our global
            network of healthcare professionals ensures seamless, comprehensive
            solutions, anytime, anywhere. Experience the future of medicine -
            choose RMC and redefine your well-being. <br />
            <strong>Catch a glimpse of our success:</strong> Explore{" "}
            <Link
              className={cn(
                buttonVariants({
                  variant: "link",
                  className:
                    "w-fit p-0 sm:text-[17px] text-sm sm:leading-loose leading-normal underline h-auto",
                })
              )}
              target="_blank"
              rel="noopener noreferrer"
              href="https://dental-telecare.com/"
            >
              Remote Dental Care
            </Link>
            , the groundbreaking project redefining healthcare access for all.
          </p>
          <ul className="flex-col gap-5 flex">
            {KeyPoints.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-4"
              >
                <Check className="min-w-6 h-6 text-white bg-gradient p-1 rounded-full" />
                <p className="sm:text-base text-sm leading-7 sm:text-balance">
                  <strong className="font-semibold">{item.title}: </strong>
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
    </div>
  );
}
