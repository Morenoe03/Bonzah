// comment for adding
import Image from "next/image";

export default function ReadyToSave() {
  return (
    <div className="relative rounded-2xl overflow-hidden text-white p-8 md:p-12 min-h-[300px] flex items-center">
      <Image
        src="/images/home-cta-background.jpg" // Placeholder - replace
        alt="Houses in a neighborhood"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center mx-auto">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Ready to Get Covered?
        </h2>
        <p className="mt-2 text-lg opacity-90">
          Talk to a Bonzah agent about your non-owner insurance options.
        </p>
        <div className="mt-6">
          <button className="btn-primary !bg-white !text-[var(--color-pink)] hover:opacity-90">
            Talk to an Agent
          </button>
        </div>
      </div>
    </div>
  );
}