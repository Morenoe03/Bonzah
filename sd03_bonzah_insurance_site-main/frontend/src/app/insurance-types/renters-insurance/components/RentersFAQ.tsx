// comment for adding
// This component needs "details" and "summary" tags, which are native to HTML.
// For a simple accordion, no extra libraries are needed.

const faqItems = [
  {
    question: "What is Renters Insurance and Why Do You Need It?",
    answer: "Renters insurance is essential for protecting your personal belongings (like furniture, electronics, and clothes) from unexpected events like theft, fire, and water damage. It also provides liability protection.",
    points: [
      "Personal Property Coverage: Covers your belongings if they are stolen or damaged.",
      "Liability Coverage: Offers protection if someone is injured in your rental and sues for damages.",
      "Loss of Use: Pays for temporary housing if your rental is uninhabitable due to a covered loss."
    ]
  },
  {
    question: "Doesn't my landlord's insurance cover my stuff?",
    answer: "No. Your landlord's insurance policy only covers the physical building (the walls, roof, etc.). It does *not* cover your personal belongings or protect you from liability claims. That is why renters insurance is so important.",
    points: []
  },
  {
    question: "How to Compare Renters Insurance Quotes",
    answer: "When comparing quotes, look at the coverage limits for personal property and liability, the deductible amount (what you pay out-of-pocket), and whether the policy offers 'Replacement Cost Value' (pays for a new item) or 'Actual Cash Value' (pays for the item's depreciated value).",
    points: []
  },
  {
    question: "What are common coverage options?",
    answer: "Besides standard property and liability, you can often add endorsements for valuable items (like jewelry or art), identity theft protection, and pet damage liability.",
    points: []
  }
];

// Renamed the function
export default function RentersFAQ() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[var(--color-black)] mb-8">
        Renters Insurance FAQ
      </h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <details
            key={item.question}
            className="group p-4 bg-white rounded-lg border border-gray-200"
            // Open the first item by default
            open={index === 0}
          >
            <summary className="flex justify-between items-center cursor-pointer list-none">
              <span className="text-lg font-semibold text-[var(--color-black)]">{item.question}</span>
              <span className="transition-transform group-open:rotate-45">
                <svg className="w-6 h-6 text-[var(--color-pink)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                </svg>
              </span>
            </summary>
            <div className="mt-4 text-[var(--color-dark-grey)] space-y-2">
              <p>{item.answer}</p>
              {item.points.length > 0 && (
                <ul className="list-disc list-inside pl-4 space-y-1">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}