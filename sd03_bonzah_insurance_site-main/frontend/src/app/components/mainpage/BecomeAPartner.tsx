"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../globals/header";
import Footer from "../globals/footer";

export default function BecomeAPartner() {
  return (
    <div className="backgroundLighter min-h-screen">
      <Header />

      {/* Bonza Partnership Journey Section */}
      <section className="py-16 px-4 text-center bg-[var(--color-white)]">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-pink)] mb-4">
          Your Partnership Journey
        </h2>
        <p className="muted max-w-2xl mx-auto mb-10">
          From initial consultation to full integration, we’ll guide you every step of the way.
        </p>

        {/* Three cards on the grid */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-pink)] text-white font-bold text-lg">
              1
            </div>
            <h3 className="text-lg font-semibold mt-4 text-[var(--color-black)]">Discovery Call</h3>
            <p className="muted mt-2 text-sm leading-6">
              We’ll discuss your business model, customer base, and integration opportunities during a detailed consultation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-pink)] text-white font-bold text-lg">
              2
            </div>
            <h3 className="text-lg font-semibold mt-4 text-[var(--color-black)]">Technical Integration</h3>
            <p className="muted mt-2 text-sm leading-6">
              Our team works with yours to seamlessly integrate insurance capabilities into your existing platform.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-pink)] text-white font-bold text-lg">
              3
            </div>
            <h3 className="text-lg font-semibold mt-4 text-[var(--color-black)]">Launch & Support</h3>
            <p className="muted mt-2 text-sm leading-6">
              Go live with embedded insurance and receive ongoing support to optimize performance and revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action part */}
      <section className="bg-[var(--color-pink)] text-center py-14 px-6 text-white">
        <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Business?</h2>
        <p className="max-w-3xl mx-auto text-base opacity-90 mb-8">
          Join thousands of businesses already benefiting from embedded insurance partnerships. Let’s explore how Bonzah can add value to your platform and customers.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/#contact"
            className="px-6 py-3 rounded-xl bg-white text-[var(--color-pink)] font-semibold hover:bg-[var(--color-light-pink)] transition"
          >
            Start Partnership Discussion
          </Link>

          <Link
            href="/#contact"
            className="px-6 py-3 rounded-xl border border-white bg-transparent hover:bg-[var(--color-dark-pink)] transition"
          >
            Contact Sales Team
          </Link>
        </div>
      </section>

      {/* Bonza Partner Section */}
      <section className="py-20 px-6 bg-[var(--color-white)] flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        {/* Left Side */}
        <div className="bg-white rounded-2xl shadow-md p-10 flex-1">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/Insurances/placeholder.png"
              alt="Bonzah Logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold text-[var(--color-pink)]">bonzah</span>
          </div>
          <h2 className="text-2xl font-semibold text-[var(--color-pink)] mb-3">
            Partner With Bonzah
          </h2>
          <h3 className="text-lg font-semibold text-[var(--color-black)] mb-4">
            You Don’t Have the Complete Solution Until You Have Insurance
          </h3>
          <p className="muted text-sm leading-6">
            Bonzah integrates coverage options from 50+ insurance companies into your platform,
            delivering value to your customers when they need it most.
          </p>
        </div>

        {/* Right Side */}
        <div className="bg-white rounded-2xl shadow-md p-10 flex-1 w-full">
          <h3 className="text-lg font-semibold mb-6 text-[var(--color-black)]">
            Start Your Partnership Journey
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First name" className="input" />
            <input type="text" placeholder="Last name" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="tel" placeholder="Phone number" className="input" />
            <input type="text" placeholder="Company" className="input" />
            <input type="text" placeholder="Industry" className="input" />
            <input type="text" placeholder="Job role" className="input md:col-span-2" />
            <input type="text" placeholder="Monthly active users/customers" className="input md:col-span-2" />
            <textarea
              placeholder="Tell us about your business and integration needs"
              className="input md:col-span-2 h-24"
            ></textarea>
          </form>
          <button className="mt-6 w-full bg-[var(--color-pink)] hover:bg-[var(--color-dark-pink)] text-white py-3 rounded-xl font-semibold transition">
            Request Partnership Information
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
