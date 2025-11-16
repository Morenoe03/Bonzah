// comment for adding
const stats = [
  { text: "With 40+ trusted commercial companies" },
  { text: "We've covered over 5,000 businesses" },
  { text: "Insured over $6B in commercial property" },
  { text: "Protected over 40,000 commercial vehicles" },
  { text: "Retained 96% of our clients" },
];

export default function Stats() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-[var(--color-black)] sm:text-4xl">
        Bonzah Began as a Commercial Agency in 2022
      </h2>
      <p className="mt-4 text-lg text-[var(--color-dark-grey)] max-w-3xl mx-auto">
        Since then, we've supported 1,000s of entrepreneurs, business owners, their employees, their families, and their clients.
      </p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.text}
            className="bg-[var(--color-pink)] text-white p-6 rounded-lg shadow-lg flex items-center justify-center text-center"
          >
            <p className="text-lg font-semibold">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}