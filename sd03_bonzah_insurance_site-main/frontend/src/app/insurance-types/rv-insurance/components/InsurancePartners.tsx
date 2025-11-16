// comment for adding
import Image from "next/image";

// Replace these with actual logos
const companyLogos = [
  { name: "Progressive", src: "/images/logos/progressive.svg" },
  { name: "Nationwide", src: "/images/logos/nationwide.svg" },
  { name: "Travelers", src: "/images/logos/travelers.svg" },
  { name: "Safeco", src: "/images/logos/safeco.svg" },
];

export default function InsurancePartners() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-[var(--color-dark-grey)] sm:text-3xl">
        Instantly Compare 40+ Trusted Insurance Companies
      </h2>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-8 items-center max-w-3xl mx-auto">
        {companyLogos.map((logo) => (
          <div key={logo.name} className="flex justify-center grayscale opacity-80">
            {/* Using text as placeholder, replace with <Image> tags */}
            <span className="text-lg font-medium text-gray-500">{logo.name}</span>
            {/*
            <Image
              src={logo.src}
              alt={logo.name}
              width={140}
              height={40}
              className="h-10 w-auto"
            />
            */}
          </div>
        ))}
      </div>
    </div>
  );
}