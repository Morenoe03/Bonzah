// comment for adding
const faqItems = [
  {
    question: "What is an SR-22 or FR-44?",
    answer: "An SR-22 or FR-44 is a certificate of financial responsibility required by the state, often after a DUI or other major violation. A non-owner policy is the fastest and cheapest way to get this certificate if you don't own a car, which allows you to reinstate your driver's license."
  },
  {
    question: "Does this cover me when I rent a car?",
    answer: "Yes, this policy typically acts as your primary liability coverage when you rent a car for personal use. This means you can confidently decline the rental company's expensive Supplemental Liability Insurance (SLI)."
  },
  {
    question: "What if I buy a car?",
    answer: "You must contact us immediately. This policy is only for non-owners. Once you buy a car, we will need to switch you to a standard auto insurance policy. Your non-owner policy will no longer be valid."
  },
  {
    question: "Does this cover a car I borrow from a friend?",
    answer: "It typically acts as secondary coverage. Your friend's auto insurance would be primary (it follows the car). If their policy limits are exceeded in a major accident, your non-owner policy would kick in to cover the remaining liability."
  }
];

export default function NonOwnerFAQ() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[var(--color-black)] mb-8">
        Non-Owner FAQ
      </h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <details
            key={item.question}
            className="group p-4 bg-white rounded-lg border border-gray-200"
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
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}