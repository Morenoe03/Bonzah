// comment for adding
import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-3xl font-bold text-[var(--color-black)] sm:text-4xl lg:text-5xl">
          Protect Your Passion With{' '}
          <span className="text-[var(--color-pink)]">Bonzah</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[var(--color-dark-grey)]">
          Specialized, Agreed Value coverage for your classic, collector, or antique vehicle. Because it's not just a car, it's a classic.
        </p>
        <form className="mt-6 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Enter Your Zip Code"
            className="flex-grow px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-[var(--color-pink)] focus:border-[var(--color-pink)]"
            aria-label="Zip Code"
          />
          <button type="submit" className="btn-primary">
            Get My Quotes
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center rounded-2xl p-8 lg:p-12">
        <Image
          src="/images/classic-car-hero.png" // Placeholder - replace
          alt="Classic car"
          width={500}
          height={300}
          priority
          className="rounded-lg"
        />
      </div>
    </div>
  );
}