"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useInViewState } from "@/lib/store";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

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
            Get latest information about RMC innovations and inventions? Subscribe
            to our newletter to get latest information directly in you inbox.
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
          <p className="md:text-left text-center">
            &copy; Remote Medical Care 2023. All rights reserved.
          </p>
          <ul className="flex gap-3">
            <li className="hover:text-primary transition-colors">
              <Link href="#">Imprint</Link>
            </li>
            <li className="hover:text-primary transition-colors">
              <Link href="#">Data Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
