// comment for adding
import Header from "../../components/globals/header";
import Footer from "../../components/globals/footer";

import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import GetMore from "./components/GetMore";
import InsurancePartners from "./components/InsurancePartners";
import Savings from "./components/Savings";
import Bundling from "./components/Bundling";
import Options from "./components/Options";
import CoverageTypes from "./components/CoverageTypes";
import OtherCoverages from "./components/OtherCoverages";
import CtaBanner from "./components/CtaBanner";

export default function MotorcycleInsurancePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero */}
        <section className="bg-[var(--color-bg)] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <Hero />
          </div>
        </section>

        {/* 2. Testimonial */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <Testimonial />
          </div>
        </section>

        {/* 3. Get More */}
        <section className="bg-[var(--color-bg)] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <GetMore />
          </div>
        </section>

        {/* 4. Insurance Partners */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <InsurancePartners />
          </div>
        </section>

        {/* 5. Average Savings */}
        <section className="bg-[var(--color-pink)] text-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <Savings />
          </div>
        </section>

        {/* 6. Bundling */}
        <section className="bg-[var(--color-bg)] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <Bundling />
          </div>
        </section>

        {/* 7. Options */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <Options />
          </div>
        </section>

        {/* 8. Coverage Types */}
        <section className="bg-[var(--color-pink)] text-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <CoverageTypes />
          </div>
        </section>

        {/* 9. Other Coverages */}
        <section className="bg-[var(--color-bg)] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <OtherCoverages />
          </div>
        </section>

        {/* 10. Final CTA */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <CtaBanner />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}