// src/app/components/mainpage/insurancePartners.tsx
import Image from "next/image";

const partners = [
  { name: "Progressive", src: "/partners/progressive.jpg" },
  { name: "State Farm", src: "/partners/statefarm.jpg" },
  { name: "GEICO", src: "/partners/geico.jpg" },
  { name: "Allstate", src: "/partners/allstate.jpg" },
  { name: "Farmers", src: "/partners/farmers.jpg" },
  { name: "Liberty Mutual", src: "/partners/libertymutualgroup.jpg" },
  { name: "USAA", src: "/partners/usaa.jpg" },
  { name: "Nationwide", src: "/partners/nationwide.jpg" },
];

// TODO Confirm the actual number of insurance partners (SCRUM-39)
export default function InsurancePartners() {
  return (
    <section className="mx-auto px-4 py-16 max-w-screen-xl text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Insurance Partners
      </h2>

      <p className="text-lg text-gray-600">
        Instantly Compare X+ Trusted Insurance Companies
      </p>

      {/* Sliding feauture across all breakpoints */}
      <div className="mt-12 marquee">
        <ul className="marquee-track">
          {[...partners, ...partners].map((p, i) => (
            <li key={`${p.name}-${i}`} className="shrink-0">
              {/* Uniform rectangular frame for every logo */}
              <div className="h-16 md:h-20 xl:h-24 w-[6rem] md:w-[7rem] xl:w-[9.7rem] flex items-center justify-center">
                <Image
                  src={p.src}
                  alt={`${p.name} logo`}
                  width={320} 
                  height={100}
                  priority={i === 0}
                  className="h-full w-full object-contain" // keep aspect, fill the frame
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-sm text-gray-500 mt-8">And many more.</p>
    </section>
  );
}
