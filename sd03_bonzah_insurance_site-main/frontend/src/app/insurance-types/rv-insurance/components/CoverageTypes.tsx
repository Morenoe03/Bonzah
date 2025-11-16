// comment for adding
import Image from "next/image";

const coverages = [
  { title: "Liability Coverage", description: "In case your RV causes bodily injury or property damage to another vehicle or driver." },
  { title: "Collision Coverage", description: "In case your RV is hit by another vehicle, hits another vehicle or object, or rolls over." },
  { title: "Comprehensive Coverage", description: "In case your RV experiences damage caused by non-collision events (like theft, fire, or weather)." },
  { title: "Total Loss Replacement", description: "Covers the cost to replace your RV with a brand new, similar model if it's totaled." },
  { title: "Vacation Liability", description: "Covers bodily injury and property damage that happens at your campsite or vacation spot." },
  { title: "Personal Effects Coverage", description: "Covers your personal belongings inside your RV, like electronics, clothing, and camping gear." },
];

export default function CoverageTypes() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="flex items-center justify-center p-4">
        <Image
          src="/images/rv-app-mockup.png" // Placeholder - replace
          alt="Phone mockup"
          width={350}
          height={550}
          className="w-auto h-full max-h-[550px]"
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold sm:text-4xl mb-6">
          RV Coverage Types
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