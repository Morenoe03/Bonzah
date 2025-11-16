import Link from "next/link";
//comment for adding
export default function GetInsurance() {
  const cards = [
    {
      title: "Auto Insurance",
      desc: "Fully customized based on your driving behavior",
      img: "/Insurances/placeholder.png",
      href: "/insurance-types/auto-insurance",
    },
    {
      title: "Non-Owners Auto Insurance",
      desc: "Affordable coverage for drivers who don’t own a vehicle but need insurance",
      img: "/Insurances/placeholder.png",
      href: "/insurance-types/non-owners-insurance",
    },
    {
      title: "Homeowners Insurance",
      desc: "Bundle and save over $700 on your insurance",
      img: "/Insurances/placeholder.png",
      href: "/insurance-types/home-insurance",
    },
    {
      title: "Classic/Collector Insurance",
      desc: "Specialized coverage for vintage and collector vehicles",
      img: "/Insurances/placeholder.png",
      href: "/insurance-types/classic-collector-insurance",
    },
    {
      title: "RV Insurance",
      desc: "Comprehensive coverage for recreational vehicles",
      img: "/Insurances/placeholder.png",
      href: "/insurance-types/rv-insurance",
    },
    {
      title: "Renters Insurance",
      desc: "Affordable protection for your belongings",
      img: "/Insurances/placeholder.png",
      href: "/insurance-types/renters-insurance",
    },
    {
      title: "Motorcycle Insurance",
      desc: "Protection for your two-wheeled adventures",
      img: "/Insurances/placeholder.png",
      href: "/insurance-types/motorcycle-insurance",
    },
    {
      title: "Pet Insurance",
      desc: "Healthcare coverage for your furry family members",
      img: "/Insurances/placeholder.png",
      href: "/insurance-types/pet-insurance",
    },
    {
      title: "Business Insurance",
      desc: "Protecting small businesses since 1936",
      img: "/Insurances/placeholder.png",
      href: "/insurance-types/business-insurance",
    },
  ];

  const linkBase =
    "transition-colors text-pink-600 hover:text-white bg-white hover:bg-[var(--color-pink)] border border-[var(--color-pink)] rounded-full px-6 py-2 inline-block text-sm font-medium";

  return (
    <section className="section text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Insurance</h2>
      <p className="text-lg text-gray-600">
        Get the best quotes at the best prices from leading insurance companies.
        We make insurance simple, quick, and easy.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {cards.map((card) => (
          <div
            key={card.title}
            className="card flex flex-col items-center text-center"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-16 h-16 rounded-md object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-black">{card.title}</h3>
            <p className="muted text-sm mt-2">{card.desc}</p>

            {/* Spacer pushes button to bottom */}
            <div className="flex-grow" />

            <Link href={card.href} className={`${linkBase} mt-6`}>
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
