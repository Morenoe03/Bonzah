// comment for adding
import Header from "../../components/globals/header";
import Footer from "../../components/globals/footer";

import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import WhyClassic from "./components/WhyClassic";
import InsurancePartners from "./components/InsurancePartners";
import CoverageFeatures from "./components/CoverageFeatures";
import OtherOptions from "./components/OtherOptions";
import CtaBanner from "./components/CtaBanner";

export default function ClassicInsurancePage() {
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

        {/* 3. Why Classic is Different */}
        <section className="bg-[var(--color-bg)] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <WhyClassic />
          </div>
        </section>

        {/* 4. Insurance Partners */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <InsurancePartners />
          </div>
        </section>

        {/* 5. Coverage Features */}
        <section className="bg-[var(--color-pink)] text-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <CoverageFeatures />
          </div>
        </section>

        {/* 6. Other Options */}
        <section className="bg-[var(--color-bg)] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <OtherOptions />
          </div>
        </section>

        {/* 7. Final CTA */}
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