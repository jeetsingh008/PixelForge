import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Banner from "@/components/Banner";
import Technology from "@/components/Technology";
import Testimonial from "./components/Testimonial";
export default function Home() {
  return (
    <div className="overflow-x-hidden min-w-80 bg-white mx-auto text-dark">
      <Hero />
      <Services />
      <Banner />
      <Technology />
      <Testimonial />
    </div>
  );
}
