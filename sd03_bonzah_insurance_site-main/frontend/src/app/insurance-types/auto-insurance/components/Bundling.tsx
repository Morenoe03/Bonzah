import Image from "next/image";
// comment for adding
const benefits = [
  { src: "/images/people-svgrepo-com.svg", title: "Bundle", description: "Bundle other household cars and drivers, or even your home, to help find savings." },
  { src: "/images/location-pin-svgrepo-com.svg", title: "Telematics", description: "Usage-based technology that tracks your driving habits can reduce your premium significantly." },
  { src: "/images/shield-check-svgrepo-com-pink.svg", title: "Own a Home", description: "You may save just for owning a home, even if you don't bundle it through us." },
  { src: "/images/heart-svgrepo-com.svg", title: "Go Green", description: "You could save when you go paperless and/or drive an electric or hybrid vehicle." },
];

const IconWrapper = ({ src, alt }: { src: string, alt: string }) => (
  <div className="mb-2 inline-flex items-center justify-center rounded-lg p-2">
    <Image src={src} alt={alt} width={28} height={28} className="h-7 w-7" />
  </div>
);

export default function Bundling() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-[var(--color-pink)] font-bold text-2xl font-bold sm:text-3xl">Get It Together and Save More</h2>
        <p className="mt-4 text-[var(--color-dark-grey)]">
          Everybody knows you get the best insurance deals when you bundle. That's why Bonzah agents are trained across multiple lines of business to help you save the most by bundling your car with other valuable personal assets.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="btn-primary !bg-white !text-[var(--color-pink)] border-2 border-[var(--color-pink)] hover:!bg-[var(--color-light-pink)] px-6 py-2.5">Call an Agent</button>
          <button className="btn-primary px-6 py-2.5">Get a Quote</button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="card text-center p-4">
            <IconWrapper src={benefit.src} alt={`${benefit.title} icon`} />
            <h3 className="font-semibold">{benefit.title}</h3>
            <p className="text-sm text-[var(--color-dark-grey)] mt-1">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}