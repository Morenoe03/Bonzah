// comment for adding
import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-3xl font-bold text-[var(--color-black)] sm:text-4xl lg:text-5xl">
          Get Your Home Insured With{' '}
          <span className="text-[var(--color-pink)]">Bonzah</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[var(--color-dark-grey)]">
          Property insurance at your fingertips. You could save 10% or
          more when you bundle your home and auto insurance.
        </p>
        <div className="mt-6 flex gap-3">
          <button type="submit" className="btn-primary">
            Speak With an Expert
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center rounded-2xl p-8 lg:p-12">
        {/* You will need to add a suitable image for the home hero */}
        
        {/* <Image
          src="/images/home-hero-image.png" // Placeholder - replace this
          alt="Family playing in front of a house"
          width={500}
          height={300}
          priority
          className="rounded-lg"
        /> */}
      </div>
    </div>
  );
}