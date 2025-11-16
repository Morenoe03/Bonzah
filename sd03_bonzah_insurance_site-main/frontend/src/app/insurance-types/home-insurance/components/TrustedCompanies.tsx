// comment for adding
import Image from "next/image";

// Replace these with actual logos
const companyLogos = [
  { name: "Progressive", src: "/partners/progressive.jpg" },
  { name: "Progressive1", src: "/partners/progressive.jpg" },
  { name: "Progressive2", src: "/partners/progressive.jpg" },
  { name: "Progressive3", src: "/partners/progressive.jpg" },
  { name: "Progressive4", src: "/partners/progressive.jpg" },
];

export default function TrustedCompanies() {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold text-[var(--color-dark-grey)]">
        Trusted by Leading Insurance Companies
      </h2>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
        {companyLogos.map((logo) => (
          <div key={logo.name} className="flex justify-center grayscale opacity-80">
            {/* Using text as placeholder, replace with <Image> tags */}
            <span className="text-lg font-medium text-gray-500">{logo.name}</span>
            <Image
              src={logo.src}
              alt={logo.name}
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}