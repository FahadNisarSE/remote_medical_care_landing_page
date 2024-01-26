"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useInViewState } from "@/lib/store";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  const update = useInViewState((state) => state.update);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(sectionRef, {
    threshold: 0.3,
  });
  const isVisible = !!entry?.isIntersecting;

  if (isVisible) update("");

  return (
    <footer
      className="w-full md:p-12 md:pt-28 p-6 pt-12 bg-[#23232f] text-white lg:mt-36 sm:mt-24 mt-20"
      id="newsletter"
    >
      <div className="flex flex-col md:gap-10 gap-7 max-w-[1200px] mx-auto">
        <div className="max-w-[600px] mx-auto text-center space-y-10">
          <h2 className="lg:text-5xl lg:leading-tight text-3xl font-bold bg-clip-text text-transparent bg-gradient  text-balance max-w-screen-md">
            Remote Medical Care
          </h2>
          <p className="sm:text-[17px] text-gray-400 sm:leading-loose leading-normal text-sm text-balance max-w-screen-md text-center">
            Trying to stay on top of it all? Get the best tools, resources and
            inspiration sent to your inbox weekly.
          </p>
          <form
            className="max-w-[600px] mx-auto flex sm:flex-row flex-col items-center gap-4 w-full"
            onSubmit={() => {}}
          >
            <Input
              className="rounded sm:max-w-none max-w-72"
              type="email"
              required={true}
              placeholder="Enter you email"
            />
            <Button className="rounded" type="submit" size="lg">
              Subscribe
            </Button>
          </form>
        </div>
        <div className="col-span-2 border-t border-t-gray-50 pt-5 flex gap-5 justify-between md:flex-row flex-col items-center">
          <p>&copy; Remote Medical Care 2023. All rights reserved.</p>
          <ul className="flex gap-3">
            <li className="hover:text-primary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </li>
            <li className="hover:text-primary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </li>
            <li className="hover:text-primary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </li>
            <li className="hover:text-primary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
