// comment for adding
import Image from "next/image";

export default function CtaBanner() {
  return (
    <div className="relative rounded-2xl overflow-hidden text-white p-8 md:p-12 min-h-[350px] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/motorcycle-mountain-background.jpg" // Placeholder - replace
        alt="Motorcycle on a mountain road"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center mx-auto">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Bonzah Helps You Get Your Bike and Insurance Together
        </h2>
        <p className="mt-2 text-lg opacity-90">
          Getting your directions together is up to you.
        </p>
        <div className="mt-6">
          <button className="btn-primary !bg-white !text-[var(--color-pink)] hover:opacity-90">
            Get Your Quote
          </button>
        </div>
      </div>
    </div>
  );
}