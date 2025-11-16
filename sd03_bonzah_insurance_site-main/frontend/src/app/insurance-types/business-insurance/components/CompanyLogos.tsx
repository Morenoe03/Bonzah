// comment for adding
export default function CompanyLogos() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-[var(--color-black)] sm:text-4xl">
        40+ Commercial Lines Companies at Your Service
      </h2>
      <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
        {/* Replace these with actual logos */}
        {[...Array(18)].map((_, i) => (
          <div key={i} className="flex justify-center grayscale opacity-70">
            <span className="text-lg font-medium text-gray-500">Logo {i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}