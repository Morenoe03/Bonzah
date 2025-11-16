// comment for adding
import Header from "../../components/globals/header";
import Footer from "../../components/globals/footer";

import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProtectBanner from "./components/ProtectBanner";
import CoverageTypes from "./components/CoverageTypes";
import Testimonial from "./components/Testimonial";
import CompanyLogos from "./components/CompanyLogos";
import BusinessFAQ from "./components/BusinessFAQ";
import QuoteForm from "./components/QuoteForm";

export default function BusinessInsurancePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <Hero />
          </div>
        </section>

        {/* 2. Stats */}
        <section className="bg-[var(--color-bg)] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <Stats />
          </div>
        </section>

        {/* 3. Protect Banner */}
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <ProtectBanner />
          </div>
        </section>

        {/* 4. Coverage Types */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <CoverageTypes />
          </div>
        </section>

        {/* 5. Testimonial */}
        <section className="bg-[var(--color-bg)] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <Testimonial />
          </div>
        </section>

        {/* 6. Company Logos */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <CompanyLogos />
          </div>
        </section>

        {/* 7. Business FAQ */}
        <section className="bg-[var(--color-bg)] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <BusinessFAQ />
          </div>
        </section>

        {/* 8. Quote Form */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}