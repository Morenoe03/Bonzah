// comment for adding
import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-3xl font-bold text-[var(--color-black)] sm:text-4xl lg:text-5xl">
          Get Your Stuff Covered With{' '}
          <span className="text-[var(--color-pink)]">Bonzah Renters Insurance</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[var(--color-dark-grey)]">
          Affordable coverage for your personal belongings and liability,
          starting at just a few dollars a month.
        </p>
        <div className="mt-6 flex gap-3">
          <button type="submit" className="btn-primary">
            Speak With an Expert
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center rounded-2xl p-8 lg:p-12">
        {/* You will need to add a suitable image for the renters hero */}
        {/* <Image
          src="/images/renters-hero-image.png" // Placeholder - replace this
          alt="Apartment living room"
          width={500}
          height={300}
          priority
          className="rounded-lg"
        /> */}
      </div>
    </div>
  );
}