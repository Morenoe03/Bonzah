// comment for adding
import Header from "../../components/globals/header";
import Footer from "../../components/globals/footer";

import Hero from "./components/Hero";
import WhoNeedsThis from "./components/WhoNeedsThis";
import WhatItCovers from "./components/WhatItCovers";
import InsuranceExperts from "./components/InsuranceExperts";
import NonOwnerFAQ from "./components/NonOwnerFAQ";
import ReadyToSave from "./components/ReadyToSave";

export default function NonOwnersInsurancePage() {
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

        {/* 2. Who Needs This? */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <WhoNeedsThis />
          </div>
        </section>

        {/* 3. What It Covers */}
        <section className="bg-[var(--color-bg)] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <WhatItCovers />
          </div>
        </section>

        {/* 4. Insurance Experts */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <InsuranceExperts />
          </div>
        </section>

        {/* 5. FAQ Section */}
        <section className="bg-[var(--color-bg)] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <NonOwnerFAQ />
          </div>
        </section>

        {/* 6. Final CTA Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <ReadyToSave />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}