import Image from "next/image";
// comment for adding
export default function CoverageTypes() {
  return (
    <>
      <h2 className="text-2xl font-bold text-center sm:text-3xl text-[var(--color-pink)]">
        Automotive Coverage Types
      </h2>
      <div className="mt-8 grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-2 bg-[var(--color-pink)] rounded-2xl flex items-center justify-center aspect-square p-4">
          <Image src="/images/shield-check-svgrepo-com.svg" alt="Coverage shield" width={256} height={256} className="w-3/4 h-auto" />
        </div>
        <div className="lg:col-span-3 text-[var(--color-dark-grey)] space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-[var(--color-black)]">Liability Coverage (Bodily Injury and Property Damage):</h3>
            <p>In case your car causes bodily injury or property damage to another vehicle or driver.</p>
          </div>
          <div className="pl-4">
            <h4 className="font-semibold text-[var(--color-black)]">Liability Coverage Limits:</h4>
            <p className="text-sm">Typically listed in figures like 50/100/50.</p>
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>$50,000 in bodily injury coverage per person.</li>
              <li>$100,000 in bodily injury per accident.</li>
              <li>$50,000 in property damage per accident.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-[var(--color-black)]">Collision Coverage:</h3>
            <p>In case your car is hit by another vehicle, hits another vehicle or object, or rolls over while driving.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-[var(--color-black)]">Comprehensive Coverage:</h3>
            <p>In case your car experiences damage caused by non-collision events, or hits an animal.</p>
          </div>
        </div>
      </div>
    </>
  );
}