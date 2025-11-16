// comment for adding
const faqItems = [
  { question: "Protecting Your Business Assets", answer: "Content for this section..." },
  { question: "General Liability", answer: "Content for this section..." },
  { question: "Worker's Compensation", answer: "Content for this section..." },
  { question: "Cyber Threats", answer: "Content for this section..." },
  { question: "Business Continuity", answer: "Content for this section..." },
];

export default function BusinessFAQ() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <button className="btn-primary mb-6">
        Get Started With an Agent
      </button>
      <h2 className="text-3xl font-bold text-[var(--color-black)] sm:text-4xl">
        We’re Here to Help When You Need a Partner Most
      </h2>
      <p className="mt-4 text-lg text-[var(--color-dark-grey)]">
        We're a full-service agency, and we're here to ensure all your assets are well protected.
      </p>
      <div className="mt-8 space-y-4 text-left">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group p-4 bg-white rounded-lg border border-gray-200"
          >
            <summary className="flex justify-between items-center cursor-pointer list-none">
              <span className="text-lg font-semibold text-[var(--color-black)]">{item.question}</span>
              <span className="transition-transform group-open:rotate-45">
                <svg className="w-6 h-6 text-[var(--color-pink)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                </svg>
              </span>
            </summary>
            <div className="mt-4 text-[var(--color-dark-grey)]">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}