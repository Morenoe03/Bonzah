// comment for adding
import Image from "next/image";

export default function Bundling() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-[var(--color-pink)] font-bold text-2xl font-bold sm:text-3xl">Get It Together and Save More</h2>
        <p className="mt-4 text-[var(--color-dark-grey)] text-lg">
          Everybody knows you get the best insurance deals when you bundle. That's why Bonzah agents are trained to help you save the most by bundling your RV with other policies, like your auto, home, or motorcycle.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="btn-primary">Call an Agent</button>
          <button className="btn-primary !bg-white !text-[var(--color-pink)] border-2 border-[var(--color-pink)] hover:!bg-[var(--color-light-pink)]">
            Get a Quote
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {/* <Image
          src="/images/friends-camping-image.jpg" // Placeholder - replace
          alt="Friends camping with an RV"
          width={500}
          height={350}
          className="rounded-lg"
        /> */}
      </div>
    </div>
  );
}