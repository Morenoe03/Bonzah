// comment for adding
import Image from "next/image";

export default function Hero() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-[var(--color-black)] sm:text-4xl lg:text-5xl">
        Get Business Insurance Fast
      </h1>
      <p className="mt-4 text-lg text-[var(--color-pink)] font-semibold">
        The right coverage for your business at a great price.
      </p>
      <div className="mt-6">
        <button className="btn-primary">
          Get Started With an Agent
        </button>
      </div>
      <div className="mt-8 flex justify-center">
        {/* <Image
          src="/images/business-hero-image.jpg" // Placeholder - replace with your image
          alt="Business owner smiling"
          width={1024}
          height={500}
          priority
          className="rounded-lg object-cover w-full max-w-4xl"
        /> */}
      </div>
    </div>
  );
}