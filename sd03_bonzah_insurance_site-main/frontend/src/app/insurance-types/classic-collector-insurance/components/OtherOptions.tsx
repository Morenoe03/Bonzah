// comment for adding
const options = [
  { title: "Flatbed Towing", description: "Ensures your car is towed with a flatbed, not a hook, to prevent damage." },
  { title: "Spare Parts Coverage", description: "Provides coverage for your extra parts, tools, and accessories." },
  { title: "Trip Interruption", description: "Helps pay for lodging or travel if your classic breaks down far from home." },
  { title: "Flexible Usage", description: "Add mileage limits or \"in-shop\" coverage while your car is being restored." },
  { title: "No Attendance Required", description: "Your car is still covered even if you're not present at a car show." },
  { title: "Multi-Car Discount", description: "Save more when you insure your entire collection with Bonzah." },
];

export default function OtherOptions() {
  return (
    <div className="text-center">
      <h2 className="text-[var(--color-pink)] font-bold text-2xl font-bold sm:text-3xl">Specialized Collector Options</h2>
      <p className="mt-2 text-[var(--color-dark-grey)]">Additional coverages are available for your unique needs.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {options.map((item) => (
          <div key={item.title} className="card text-center p-6 bg-white shadow-lg">
            <h3 className="font-semibold text-lg text-[var(--color-black)]">{item.title}</h3>
            <p className="text-sm mt-2 text-[var(--color-dark-grey)]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}