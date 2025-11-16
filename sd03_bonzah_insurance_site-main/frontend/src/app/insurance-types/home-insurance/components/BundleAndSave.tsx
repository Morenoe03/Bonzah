// comment for adding
import Image from "next/image";

export default function BundleAndSave() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-[var(--color-black)]">
        Bundle and Save
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--color-dark-grey)]">
        Bundling property insurance with other policies, such as auto insurance, can offer significant savings.
      </p>
      <div className="mt-8 max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 text-left grid grid-cols-3 gap-4 items-center">
        {/* Placeholder image - replace with a relevant one */}
        {/*
        <Image
          src="/images/home-icon.svg" // Placeholder
          alt="Home icon"
          width={100}
          height={100}
          className="w-20 h-20"
        />
        */}
        <div className="col-span-2">
          <h3 className="text-xl font-bold text-[var(--color-pink)]">
            Homeowners Insurance
          </h3>
          <p className="mt-1 text-[var(--color-dark-grey)]">
            Save an average of 10% when you bundle your car insurance.
          </p>
        </div>
      </div>
    </div>
  );
}