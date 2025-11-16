// comment for adding
import Image from "next/image";

export default function CtaBanner() {
  return (
    <div className="relative rounded-2xl overflow-hidden text-white p-8 md:p-12 min-h-[350px] flex items-center">
      {/* <Image
        src="/images/classic-car-drive.jpg" // Placeholder - replace
        alt="Classic car driving in the mountains"
        layout="fill"
        objectFit="cover"
        className="z-0"
      /> */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <div className="relative z-20 text-center mx-auto">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Get Your Classic Covered Today
        </h2>
        <p className="mt-2 text-lg opacity-90">
          Talk to a Bonzah specialist who speaks your language.
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