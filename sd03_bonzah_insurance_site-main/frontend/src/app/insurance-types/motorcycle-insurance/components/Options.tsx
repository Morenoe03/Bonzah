// comment for adding
const options = [
  { title: "Bundle", description: "Bundle your motorcycle, auto, and home policies to help find massive savings." },
  { title: "Good Rider Discount", description: "A clean driving record can reduce your premium significantly." },
  { title: "Own a Home", description: "You may save just for owning a home, even if you don't bundle it through us." },
  { title: "Safety Course", description: "Completing an approved motorcycle safety course can earn you a discount." },
  { title: "Multi-Bike Discount", description: "Get a discount for insuring more than one motorcycle with us." },
  { title: "Pay in Full", description: "And if you auto-pay, pay in full, or get paperless billing, you could save even more." },
];

export default function Options() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-[var(--color-black)] sm:text-4xl mb-8">
        Ways to Save on Motorcycle Insurance
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {options.map((item) => (
          <div key={item.title} className="card text-left p-6 bg-[var(--color-bg)]">
            <h3 className="font-semibold text-lg text-[var(--color-pink)]">{item.title}</h3>
            <p className="text-sm mt-2 text-[var(--color-dark-grey)]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}