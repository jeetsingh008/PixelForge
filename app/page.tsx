import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Banner from "@/components/Banner";
import Technology from "@/components/Technology";
export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white mx-auto text-dark">
      <Hero />
      <Services />
      <Banner />
      <Technology />
    </div>
  );
}
