// comment for adding
const items = [
  { title: "Frequent Renters", description: "This policy can act as your primary liability coverage, allowing you to decline the expensive liability waiver at the rental counter." },
  { title: "Car-Share Users", description: "Perfect for users of services like Zipcar or Turo, adding a layer of liability protection beyond the service's base coverage." },
  { title: "Frequent Borrowers", description: "If you often borrow a friend's or family member's car, this policy protects you from liability claims." },
  { title: "SR-22/FR-44 Filers", description: "A non-owner policy is often the cheapest way to fulfill a state-required SR-22 or FR-44 filing to get your license reinstated." },
];

export default function WhoNeedsThis() {
  return (
    <div className="text-center">
      <h2 className="text-[var(--color-pink)] font-bold text-2xl font-bold sm:text-3xl">Who Needs Non-Owner Insurance?</h2>
      <p className="mt-2 text-[var(--color-dark-grey)]">If you drive but don't own a vehicle, this policy is for you.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.title} className="card text-center p-6 bg-[var(--color-bg)]">
            <h3 className="font-semibold text-lg text-[var(--color-black)]">{item.title}</h3>
            <p className="text-sm mt-2 text-[var(--color-dark-grey)]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}