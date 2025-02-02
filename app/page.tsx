import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Banner from "@/components/Banner";
export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
      <Banner />
    </div>
  );
}
