import * as React from "react"; 
import Navbar from "@/components/FrontPages/Common/Navbar";
import HeroBanner from "@/components/FrontPages/Home/HeroBanner";
import BuildingBlocks from "@/components/FrontPages/Home/BuildingBlocks";
import ExampleShowcase from "@/components/FrontPages/Home/ExampleShowcase";
import HowItWorks from "@/components/FrontPages/Home/HowItWorks";
import ComponentsPreview from "@/components/FrontPages/Home/ComponentsPreview";
import GetStarted from "@/components/FrontPages/Home/GetStarted";
import Footer from "@/components/FrontPages/Common/Footer";

export default function Home() {
  return (
    <>
      <div className="fp-wrapper">
        <Navbar />

        <HeroBanner />

        <ExampleShowcase />

        <BuildingBlocks />

        <HowItWorks />

        <ComponentsPreview />

        <GetStarted />

        <Footer />
      </div>
    </>
  );
}