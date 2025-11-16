// comment for adding
import Image from "next/image";

export default function Savings() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
          Riders who save with us save an average of
        </h2>
        <div className="my-2">
          <span className="font-bold text-7xl sm:text-8xl">$45</span>
          <span className="text-3xl font-semibold sm:text-4xl">
            {' '}per month
          </span>
        </div>
        <p className="text-2xl sm:text-3xl">on their motorcycle insurance*</p>
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/phone-mockup-moto.png" // Placeholder - replace
          alt="Phone showing motorcycle quotes"
          width={300}
          height={500}
          className="w-auto h-96"
        />
      </div>
    </div>
  );
}