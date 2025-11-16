import Image from "next/image";
// comment for adding
const benefits = [
  { src: "/images/pink-car-side-svgrepo-com.svg", text: "A better car" },
  { src: "/images/umbrella-svgrepo-com.svg", text: "A ski or surf rack" },
  { src: "/images/wrench-svgrepo-com.svg", text: "Mechanical protection" },
  { src: "/images/dollar-sign-svgrepo-com.svg", text: "A lower monthly payment" },
];

const IconWrapper = ({ src, alt }: { src: string, alt: string }) => (
    <div className="mb-2 inline-flex items-center justify-center rounded-lg p-2">
      <Image src={src} alt={alt} width={28} height={28} className="h-7 w-7" />
    </div>
);

export default function GetMore() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold sm:text-3xl text-[var(--color-pink)]">
        Get It Together and Get More
      </h2>
      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
        <button className="btn-primary !bg-white !text-[var(--color-pink)] border-2 border-[var(--color-pink)] hover:!bg-[var(--color-light-pink)] px-6 py-2.5">
          Call an Agent
        </button>
        <button className="btn-primary px-6 py-2.5">Get a Quote</button>
      </div>
      <p className="mt-8 max-w-3xl mx-auto text-[var(--color-dark-grey)]">
        Not only can Bonzah ease the stress of getting auto insurance, but we can also save you money, sometimes lots of money (average Bonzah customer who reported savings in 2024 saved $1,001/yr*). So you can get more of what you want, like:
      </p>
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((benefit) => (
          <div key={benefit.text} className="card text-center p-4 justify-start">
            <IconWrapper src={benefit.src} alt={benefit.text} />
            <p className="font-semibold mt-1">{benefit.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}