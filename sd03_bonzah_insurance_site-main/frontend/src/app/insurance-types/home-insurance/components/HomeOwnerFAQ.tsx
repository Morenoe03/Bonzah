// This component needs "details" and "summary" tags, which are native to HTML.
// For a simple accordion, no extra libraries are needed.
// comment for adding
const faqItems = [
  {
    question: "What Homeowners Insurance Is and Why You Need It",
    answer: "Homeowners insurance is essential for protecting your home and personal belongings from unexpected events like natural disasters, theft, and accidents. A standard policy typically includes several types of coverage:",
    points: [
      "Dwelling Coverage: Protects the structure of your home, including walls, roof, and foundation.",
      "Personal Property Coverage: Covers your personal belongings, such as furniture, electronics, and clothing.",
      "Liability Coverage: Offers protection if someone is injured on your property and sues for damages.",
      "Additional Living Expenses: Pays for temporary housing and other expenses if your home is uninhabitable due to a covered loss."
    ]
  },
  {
    question: "How to Compare Homeowners Insurance Quotes",
    answer: "Content for this section goes here...",
    points: []
  },
  {
    question: "Factors Affecting Homeowners Insurance Rates",
    answer: "Content for this section goes here...",
    points: []
  },
  {
    question: "Types of Homeowners Insurance Policies",
    answer: "Content for this section goes here...",
    points: []
  }
];

export default function HomeownerFAQ() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[var(--color-black)] mb-8">
        Homeowners Insurance FAQ
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