import Image from "next/image";
import Navbar from "../navbar/Navbar";
import MainSection from "@/features/home/mainSection";
import AboutUsSection from "@/features/home/aboutUsSection";
import WhyChooseSection from "@/features/home/whyChooseSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <MainSection />
      <AboutUsSection />
      <WhyChooseSection />
    </div>
  );
}
