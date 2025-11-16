import Header from "../../components/globals/header";
import Footer from "../../components/globals/footer";

import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Bundling from "./components/Bundling";
import GetMore from "./components/GetMore"; // New import
import Savings from "./components/Savings";
import CoverageTypes from "./components/CoverageTypes";
import OtherCoverages from "./components/OtherCoverages";
import CtaBanner from "./components/CtaBanner";

export default function AutoInsurancePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section: Light Pink Background */}
        <section className="bg-[var(--color-bg)] py-12">
          <div className="max-w-6xl mx-auto px-4">
            <Hero />
          </div>
        </section>

        {/* Testimonial Section: White Background */}
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <Testimonial />
          </div>
        </section>

        {/* GetMore Section: Light Pink Background */}
        <section className="bg-[var(--color-bg)] py-12">
          <div className="max-w-6xl mx-auto px-4">
            <GetMore />
          </div>
        </section>

        {/* Savings Section: White Background */}
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <Savings />
          </div>
        </section>

        {/* Bundling Section ("Save More"): light pink Background */}
        <section className="bg-[var(--color-bg)] py-12">
          <div className="max-w-6xl mx-auto px-4">
            <Bundling />
          </div>
        </section>

        {/* Coverage Types Section: White Background */}
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <CoverageTypes />
          </div>
        </section>

        {/* Other Coverages Section: Light Pink Background */}
        <section className="bg-[var(--color-bg)] py-12">
          <div className="max-w-6xl mx-auto px-4">
            <OtherCoverages />
          </div>
        </section>

        {/* Final CTA Section: Solid Pink Background */}
        <section className="bg-[var(--color-pink)] text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <CtaBanner />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}