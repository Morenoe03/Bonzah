// comment for adding
import Image from "next/image";

const coverages = [
  { title: "Liability Coverage", description: "In case your bike causes bodily injury or property damage to another vehicle or driver." },
  { title: "Collision Coverage", description: "In case your motorcycle is hit by another vehicle, hits another vehicle or object." },
  { title: "Comprehensive Coverage", description: "In case your bike experiences damage caused by non-collision events (like theft, fire, or weather)." },
  { title: "Custom Parts (CPE)", description: "Covers your custom parts and equipment that weren't factory-installed." },
  { title: "Safety Apparel", description: "Covers your helmet, leathers, and other riding gear if damaged in an accident." },
  { title: "OEM Parts", description: "Ensures that repairs are made with original equipment manufacturer (OEM) parts." },
];

export default function CoverageTypes() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="flex items-center justify-center p-4">
        <Image
          src="/images/moto-app-mockup.png" // Placeholder - replace
          alt="Phone mockup"
          width={350}
          height={550}
          className="w-auto h-full max-h-[550px]"
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold sm:text-4xl mb-6">
          Motorcycle Coverage Types
        </h2>
        {coverages.map((item) => (
          <div key={item.title}>
            <h3 className="font-semibold text-lg">
              {item.title}:
            </h3>
            <p className="opacity-90">{item.description}</p>
          </div>
        ))}
        <p className="font-semibold text-lg">...And more!</p>
      </div>
    </div>
  );
}