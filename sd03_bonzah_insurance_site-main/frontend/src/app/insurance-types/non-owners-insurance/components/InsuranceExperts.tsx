// comment for adding
import Image from "next/image";

export default function InsuranceExperts() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center md:justify-start">
        <Image
          src="/images/agent-smiling.png" // Placeholder
          alt="Bonzah insurance agent"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-[var(--color-black)]">
          Agents When You Need Them
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-dark-grey)]">
              OUR INSURANCE EXPERTS ARE READY TO HELP
            </h3>
            <a
              href="tel:855-951-6188"
              className="text-3xl font-bold text-[var(--color-pink)] hover:opacity-80"
            >
              855-951-6188
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-dark-grey)]">
              SALES HOURS
            </h3>
            <p className="text-xl font-bold text-[var(--color-pink)]">
              Mon - Fri 9AM - 8PM
            </p>
            <p className="text-xl font-bold text-[var(--color-pink)]">
              Sat 10AM - 7PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}