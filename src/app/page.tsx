import AboutUs from "@/container/AboutUs";
import ContactUs from "@/container/ContactUs";
import HomeBanner from "@/container/HomeBanner";
import HowItWorks from "@/container/HowItWorks";
import Services from "@/container/Services";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Services />
      <AboutUs />
      <HowItWorks />
      <ContactUs />
    </>
  );
}
