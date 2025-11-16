// comment for adding
import Image from "next/image";

const coverages = [
  { title: "Agreed Value Liability", description: "Your car's value is locked in for the policy term. No depreciation, no haggling." },
  { title: "Collision", description: "Covers damage to your classic car if it's in an accident with another vehicle or object." },
  { title: "Comprehensive", description: "Covers non-collision damage, like theft, fire, vandalism, or a tree falling on it." },
  { title: "Liability Coverage", description: "Covers bodily injury and property damage you may cause to others while driving your classic." },
];

export default function CoverageFeatures() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="flex items-center justify-center p-4">
        {/* <Image
          src="/images/classic-car-interior.png" // Placeholder - replace
          alt="Classic car interior"
          width={350}
          height={550}
          className="w-auto h-full max-h-[550px] rounded-lg"
        /> */}
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold sm:text-4xl mb-6">
          Coverage Built for Collectors
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