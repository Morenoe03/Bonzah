import Image from "next/image";
// comment for adding
export default function CtaBanner() {
  return (
    <div className="grid md:grid-cols-5 gap-8 items-center">
      <div className="md:col-span-3">
        <h2 className="text-2xl font-bold sm:text-3xl">Bonzah Helps You Get Your Car and Car Insurance Together</h2>
        <p className="mt-2 opacity-90">Getting your directions together is up to you.</p>
        <div className="mt-6">
          <button className="btn-primary !bg-white !text-[var(--color-pink)] hover:opacity-90">Get Your Quote</button>
        </div>
      </div>
      <div className="md:col-span-2 hidden md:flex items-center justify-center">
        <div className="flex justify-center items-center bg-[var(--color-pink)] rounded-2xl p-8 lg:p-12">
                <Image
                  src="/images/car-side-svgrepo-com.svg"
                  alt="Illustration of a car for insurance"
                  width={500}
                  height={300}
                  priority
                  className="h-40 w-auto md:h-48"
                />
              </div>
      </div>
    </div>
  );
}