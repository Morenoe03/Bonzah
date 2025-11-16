// comment for adding
"use client";

export default function QuoteForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    alert("Form submitted!");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[var(--color-black)] sm:text-4xl">
          Request a Personalized Insurance Quote
        </h2>
        <p className="mt-4 text-lg text-[var(--color-dark-grey)]">
          Let our experienced agents find insurance quotes that fit your business's needs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First name*
            </label>
            <input
              type="text"
              id="firstName"
              required
              className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-[var(--color-pink)] focus:border-[var(--color-pink)]"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last name*
            </label>
            <input
              type="text"
              id="lastName"
              required
              className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-[var(--color-pink)] focus:border-[var(--color-pink)]"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email*
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-[var(--color-pink)] focus:border-[var(--color-pink)]"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-[var(--color-pink)] focus:border-[var(--color-pink)]"
            />
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
              Company name*
            </label>
            <input
              type="text"
              id="companyName"
              required
              className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-[var(--color-pink)] focus:border-[var(--color-pink)]"
            />
          </div>

          {/* Type of Work */}
          <div>
            <label htmlFor="workType" className="block text-sm font-medium text-gray-700">
              What type of work do you do?
            </label>
            <select
              id="workType"
              className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-[var(--color-pink)] focus:border-[var(--color-pink)]"
            >
              <option>Please Select</option>
              {/* Add options here */}
              <option>Construction</option>
              <option>Retail</option>
              <option>Services</option>
              <option>Other</option>
            </select>
          </div>

          {/* Type of Insurance */}
          <div className="md:col-span-2">
            <label htmlFor="insuranceType" className="block text-sm font-medium text-gray-700">
              What type of insurance are you looking for?*
            </label>
            <select
              id="insuranceType"
              required
              className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-[var(--color-pink)] focus:border-[var(--color-pink)]"
            >
              <option>Please Select</option>
              <option>Business Owner's Policy (BOP)</option>
              <option>General Liability</option>
              <option>Workers' Compensation</option>
              <option>Other</option>
            </select>
          </div>

          {/* Help With */}
          <div className="md:col-span-2">
            <label htmlFor="helpWith" className="block text-sm font-medium text-gray-700">
              What can we help you with?*
            </label>
            <textarea
              id="helpWith"
              required
              rows={4}
              className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-[var(--color-pink)] focus:border-[var(--color-pink)]"
            ></textarea>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn-primary"
          >
            Get My Quote
          </button>
        </div>
      </form>
    </div>
  );
}