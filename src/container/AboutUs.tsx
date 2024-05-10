"use client";

import { buttonVariants } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useInViewState } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";
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
            Remote Medical Care (RMC) is transforming healthcare, providing
            individuals, including busy professionals, those with disabilities,
            and residents of nursing homes, with access to high-quality care
            comparable to traditional healthcare. Say goodbye to long commutes
            and crowded waiting rooms! Our personalized healthcare services come
            to you through your mobile phone. Utilizing advanced technologies
            such as IoT devices and Artifical Intelligence, we conduct diagnoses
            and treatments within the comfort of your home. With our healthcare
            solution, we present seamless, comprehensive solutions for
            organizations like clinics, health insurance companies and
            governments, addressing diverse needs anytime, anywhere. Embrace the
            future of medical solutions with RMC and redefine the well-being of
            your organization and its members. <br />
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
              <li key={item.title} className="flex items-start gap-4">
                <Check className="min-w-6 h-6 text-white bg-gradient p-1 rounded-full" />
                <p className="sm:text-base text-sm leading-7 sm:text-balance">
                  <strong className="font-semibold">{item.title}: </strong>
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <img
          src='about_us_img.png'
          alt="Dental Care Patients"
          width={445}
          height={523}
          className="md:ml-auto object-contain"
        />
      </section>
    </div>
  );
}
