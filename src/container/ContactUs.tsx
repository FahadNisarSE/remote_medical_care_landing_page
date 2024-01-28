"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Map } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useInViewState } from "@/lib/store";
import { useRef } from "react";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "FirtsName must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "LastName must be least 2 characters.",
  }),
  email: z.string().email({
    message: "Email Format is invalid.",
  }),
  message: z.string().min(2, {
    message: "Message must be least 2 characters.",
  }),
});

export default function ContactUs() {
  const update = useInViewState((state) => state.update);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(sectionRef, {
    threshold: 0.3,
  });
  const isVisible = !!entry?.isIntersecting;

  if (isVisible) update("#contact");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="bg-alternate_bg">
      <section
        ref={sectionRef}
        className="max-w-[1200px] px-8 mx-auto lg:py-16 sm:py-14 py-10 md:min-h-[80vh] md:grid grid-cols-2 flex flex-col md:gap-10 gap-20 items-center"
        id="contact"
      >
        <div className="flex flex-col md:gap-10 gap-7">
          <div className="space-y-2">
            <h3 className="lg:text-2xl lg:leading-[48px] text-primary text-xl font-semibold text-balance text-left">
              Contact Us
            </h3>
            <h2 className="lg:text-5xl lg:leading-tight text-3xl font-bold bg-clip-text text-transparent bg-gradient text-balance max-w-screen-md text-left">
              How to find us
            </h2>
          </div>
          <p className="sm:text-[17px] text-sm leading-loose sm:text-balance md:max-w-sm">
            Discover the welcoming atmosphere of our physical office where you
            can receive the same exceptional care in person. Find our addresses
            or connect with us directly through the contact form. We value your
            suggestions and feedback, as we continuously strive to enhance your
            experience.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <Map className="w-6 h-6 text-primary font-bold" />
              <address className="px-4 py-2 md:max-w-sm">
                Biotech & Capital Consulting GmbH, Neuffenstr. 35, 73630
                Remshalden, Germany
              </address>
            </li>
          </ul>
        </div>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="gap-y-8 gap-x-4 grid sm:grid-col-2"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="text-left col-span-2">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@mail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="text-left col-span-2">
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="col-span-2 w-fit" size="lg">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
}
