// comment for adding
import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="relative text-center py-12 px-4 rounded-lg overflow-hidden">
      <Image
        src="/images/home-cta-background.jpg" // Placeholder - replace
        alt="Neighborhood background"
        layout="fill"
        objectFit="cover"
        className="z-0 opacity-20"
      />
      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-2xl font-semibold italic text-[var(--color-black)] sm:text-3xl">
          "Talking to Bonzah was one of the best decisions I made. They saved me money on my motorcycle and auto insurance!"
        </p>
        <p className="mt-4 text-lg text-[var(--color-dark-grey)] font-medium">
          — K. Holderman | Bonzah Customer
        </p>
      </div>
    </div>
  );
}