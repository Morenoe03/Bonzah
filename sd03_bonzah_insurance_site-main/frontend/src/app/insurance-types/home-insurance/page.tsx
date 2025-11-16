// comment for adding
import Header from "../../components/globals/header";
import Footer from "../../components/globals/footer";
import Hero from "./components/Hero";
import TrustedCompanies from "./components/TrustedCompanies";
import BundleAndSave from "./components/BundleAndSave";
import InsuranceExperts from "./components/InsuranceExperts";
import HomeownerFAQ from "./components/HomeOwnerFAQ";
import ReadyToSave from "./components/ReadyToSave";

export default function HomeInsurancePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[var(--color-bg)] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <Hero />
          </div>
        </section>

        {/* Trusted Companies Section */}
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <TrustedCompanies />
          </div>
        </section>

        {/* Bundle and Save Section */}
        <section className="bg-[var(--color-bg)] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <BundleAndSave />
          </div>
        </section>

        {/* Insurance Experts Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <InsuranceExperts />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[var(--color-bg)] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <HomeownerFAQ />
          </div>
        </section>

        {/* Final CTA Section */}
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