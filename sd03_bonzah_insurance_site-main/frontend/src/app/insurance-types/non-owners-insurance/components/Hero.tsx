// comment for adding
import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-3xl font-bold text-[var(--color-black)] sm:text-4xl lg:text-5xl">
          Insurance For Drivers Without a Car
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[var(--color-dark-grey)]">
          Get Bonzah's <span className="font-semibold text-[var(--color-pink)]">Non-Owner Liability</span> coverage for peace of mind when you rent, borrow, or use car-sharing services.
        </p>
        <div className="mt-6 flex gap-3">
          <button type="submit" className="btn-primary">
            Speak With an Expert
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center rounded-2xl p-8 lg:p-12">
        <Image
          src="/images/car-keys.png" // Placeholder - replace
          alt="Hands holding car keys"
          width={500}
          height={300}
          priority
          className="rounded-lg"
        />
      </div>
    </div>
  );
}