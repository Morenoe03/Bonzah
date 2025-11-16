import Image from "next/image";
// comment for adding
export default function Savings() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
      <div className="flex justify-center">
        <Image src="/images/money-bag-svgrepo-com.svg" alt="Money bag" width={192} height={192} className="w-32 h-32 md:w-48 md:h-48" />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
          <span className="text-[var(--color-pink)] font-bold">
            Drivers who save with us save an average of
          </span><br/>
          <span className="text-[var(--color-black)] font-bold text-6xl sm:text-7xl">
            $00
          </span><br/>
          {/* Changed: Set to font-normal and a smaller text-base size */}
          <span className="text-[var(--color-dark-grey)] text-base font-normal">
            per month on their auto insurance*
          </span>
        </h2>
      </div>
    </div>
  );
}