// comment for adding
const coverageItems = [
  { title: "Uninsured/Underinsured Motorist", description: "In case your RV is hit by someone with little to no coverage." },
  { title: "Emergency Expense", description: "Helps pay for lodging or travel if your RV is disabled far from home." },
  { title: "Personal Injury Protection (PIP)", description: "Covers medical expenses for you and your passengers after an accident, no matter who's at fault." },
  { title: "Rental Car Reimbursement", description: "Rent a replacement vehicle (or RV) while yours is being repaired." },
  { title: "Gap Insurance", description: "In case your RV is totaled and the payout value isn't as much as what you owe on it." },
  { title: "Roadside Assistance", description: "In case your RV breaks down and you need to be towed, have a tire changed, or get fuel." }
];

export default function OtherCoverages() {
  return (
    <div className="text-center">
      <h2 className="text-[var(--color-pink)] font-bold text-2xl font-bold sm:text-3xl">Other Important Coverages</h2>
      <p className="mt-2 text-[var(--color-dark-grey)]">Additional coverages may be available to you as well.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coverageItems.map((item) => (
          <div key={item.title} className="card text-center p-6 bg-white shadow-lg">
            <h3 className="font-semibold text-lg text-[var(--color-black)]">{item.title}</h3>
            <p className="text-sm mt-2 text-[var(--color-dark-grey)]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}