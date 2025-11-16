// comment for adding
import Image from "next/image";

export default function WhyClassic() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center items-center">
        <Image
          src="/images/classic-car-engine.png" // Placeholder - replace
          alt="Classic car engine"
          width={450}
          height={300}
          className="rounded-lg"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-[var(--color-black)] sm:text-4xl">
          Not Your Average Auto Policy
        </h2>
        <p className="mt-4 text-lg text-[var(--color-dark-grey)]">
          A standard auto policy won't cut it. Collector insurance is different because it's built around the true value of your car.
        </p>
        <ul className="mt-4 space-y-2">
          {["Agreed Value Coverage: We lock in your car's value upfront. If there's a total loss, you get that full amount. No depreciation.", "Lower Premiums: Because you don't use your classic as a daily driver, rates are often much lower than standard insurance.", "Flexible Usage: Policies designed for pleasure use, car shows, and club events, not daily commutes."].map((item) => (
            <li key={item} className="flex items-start">
              <svg className="w-5 h-5 text-[var(--color-pink)] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-[var(--color-dark-grey)] text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}