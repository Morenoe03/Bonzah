import Image from "next/image";
// comment for adding
const coverageItems = [
  { title: "Uninsured/Underinsured Motorist Coverage", description: "In case your car is hit by someone with little to no coverage." },
  { title: "Medical Payments Coverage", description: "In case medical and/or funeral expenses are required following a car accident." },
  { title: "Personal Injury Protection (PIP)", description: "Covers you and your passengers for medical expenses and loss of income after a car accident, no matter who's at fault." },
  { title: "Rental Car Reimbursement", description: "Rent a replacement vehicle while your car is being repaired or replaced." },
  { title: "Gap Insurance", description: "In case your car is totaled and the payout value isn't as much as what you owe on it." },
  { title: "Roadside Assistance", description: "In case your car breaks down on the side of the road and you need to be towed, have a tire changed, or have gas brought to you." }
];

export default function OtherCoverages() {
  return (
    <div className="text-center">
      <h2 className="text-[var(--color-pink)] font-bold text-2xl font-bold sm:text-3xl">Other Important Coverages</h2>
      <p className="mt-2 text-[var(--color-dark-grey)]">Additional coverages may be available to you as well.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coverageItems.map((item) => (
          <div key={item.title} className="card text-center p-6">
            <div className="mb-2">
              <Image src="/images/document-svgrepo-com.svg" alt="Document icon" width={32} height={32} className="h-8 w-8 mx-auto" />
            </div>
            <h3 className="font-semibold text-lg text-[var(--color-black)]">{item.title}</h3>
            <p className="text-sm mt-2 text-[var(--color-dark-grey)]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}