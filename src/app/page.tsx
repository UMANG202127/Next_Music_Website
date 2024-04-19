import FeaturedCourses from "@/components/FeaturedCourses";
import Herosection from "@/components/Herosection";
import InfiniteMovingCard from "@/components/InfiniteMovingCard";
import RevealEffect from "@/components/RevealEffect";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosection />
      <FeaturedCourses />
      <WhyChooseUs />
      <RevealEffect />
      <InfiniteMovingCard />
      
    </main>
  );
}
