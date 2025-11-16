// comment for adding
const options = [
  { title: "Bundle", description: "Bundle your RV, auto, and home policies to help find massive savings." },
  { title: "Telematics", description: "Usage-based technology that tracks your driving habits can reduce your premium significantly." },
  { title: "Own a Home", description: "You may save just for owning a home, even if you don't bundle it through us." },
  { title: "Storage Option", description: "Save money when your RV is in storage for the off-season." },
  { title: "Multi-Policy Discount", description: "Get a discount for having multiple policies with one carrier, like auto or boat." },
  { title: "Pay in Full", description: "And if you auto-pay, pay in full, or get paperless billing, you could save even more." },
];

export default function Options() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-[var(--color-black)] sm:text-4xl mb-8">
        Ways to Save on RV Insurance
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