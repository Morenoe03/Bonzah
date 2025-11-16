// comment for adding
import Image from "next/image";

export default function GetMore() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold text-[var(--color-black)] sm:text-4xl">
          Get It Together and Get More
        </h2>
        <p className="mt-4 text-lg text-[var(--color-dark-grey)]">
          Not only can Bonzah ease the stress of getting bike insurance, but we can also save you money (average Bonzah customer who reported savings in 2024 saved $250/yr*). So you can get more of what you want, like:
        </p>
        <ul className="mt-4 space-y-2">
          {["A new helmet", "Safer riding gear", "Mechanical protection", "Or just a lower monthly payment"].map((item) => (
            <li key={item} className="flex items-center">
              <svg className="w-5 h-5 text-[var(--color-pink)] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-[var(--color-dark-grey)] text-lg">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="btn-primary">Call an Agent</button>
          <button className="btn-primary !bg-white !text-[var(--color-pink)] border-2 border-[var(--color-pink)] hover:!bg-[var(--color-light-pink)]">
            Get a Quote
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/images/motorcycle-side-image.png" // Placeholder - replace
          alt="Motorcycle parked"
          width={450}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}