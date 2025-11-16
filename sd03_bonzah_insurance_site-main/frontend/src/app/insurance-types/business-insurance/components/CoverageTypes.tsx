// comment for adding
"use client";

import { useState } from "react";

const coverageData = [
  {
    id: "bop",
    title: "Business Owner's Insurance (BOP)",
    content: {
      heading: "Business Owner's Policy (BOP)",
      description: "A Business Owner's Policy (BOP) combines essential coverage like General Liability and Commercial Property Insurance into one affordable package. This policy is ideal for small to medium-sized businesses, offering protection against common risks such as property damage, liability claims, and business interruptions.",
      subtext: "Tailored to meet the unique needs of each business, a BOP provides comprehensive coverage while being cost-effective, making it a smart choice for businesses looking to secure their operations without breaking the bank."
    }
  },
  {
    id: "property",
    title: "Commercial Property Insurance",
    content: {
      heading: "Commercial Property Insurance",
      description: "Commercial Property Insurance is crucial for protecting your business's physical assets, including buildings, equipment, inventory, and furniture. This insurance covers damage from events like fire, theft, and certain natural disasters.",
      subtext: "Whether you own or rent your commercial space, this policy ensures that you can recover quickly from unexpected events, minimizing financial losses and maintaining business continuity."
    }
  },
  {
    id: "liability",
    title: "General Liability Insurance",
    content: {
      heading: "General Liability Insurance",
      description: "General Liability Insurance is a must-have for any business, providing coverage for third-party claims related to bodily injury, property damage, and personal injury.",
      subtext: "This policy is vital for businesses that interact with the public, offering protection against lawsuits and helping to cover legal expenses. Ensure your business is protected from the unexpected with this essential insurance coverage."
    }
  },
  {
    id: "workers",
    title: "Workers' Compensation Insurance",
    content: {
      heading: "Workers' Compensation Insurance",
      description: "Workers' Compensation Insurance is essential for businesses with employees, covering medical expenses and lost wages if an employee is injured or becomes ill due to work-related activities.",
      subtext: "This insurance not only protects your employees but also shields your business from legal claims and potential financial burdens arising from workplace accidents."
    }
  },
  {
    id: "cyber",
    title: "Cyber Liability Insurance",
    content: {
      heading: "Cyber Liability Insurance",
      description: "Cyber Liability Insurance protects businesses from data breaches and cyberattacks. It covers costs associated with data recovery, legal fees, customer notifications, and regulatory fines.",
      subtext: "In today's digital world, this coverage is critical for any business that handles sensitive customer data or relies on computer systems for its operations."
    }
  },
  {
    id: "professional",
    title: "Professional Liability Insurance",
    content: {
      heading: "Professional Liability Insurance",
      description: "Also known as Errors & Omissions (E&O) Insurance, Professional Liability Insurance protects businesses that provide professional services or advice.",
      subtext: "This policy covers legal costs and settlements if your business is sued for negligence, errors, or omissions in the services provided. It's essential coverage for businesses like consultants, lawyers, and healthcare providers."
    }
  },
  {
    id: "auto",
    title: "Commercial Auto Insurance",
    content: {
      heading: "Commercial Auto Insurance",
      description: "Commercial Auto Insurance provides coverage for vehicles used for business purposes, including cars, trucks, and vans. It covers liability for accidents, as well as damage to the vehicles.",
      subtext: "Whether you have a single delivery car or a fleet of trucks, this policy is necessary to protect your business on the road."
    }
  },
];

export default function CoverageTypes() {
  const [activeTab, setActiveTab] = useState(coverageData[0].id);
  const activeContent = coverageData.find(item => item.id === activeTab)?.content;

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Tab Navigation */}
      <div className="md:col-span-1">
        <nav className="flex flex-col space-y-2">
          {coverageData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-[var(--color-bg)] text-[var(--color-pink)] border border-[var(--color-pink)]'
                  : 'text-[var(--color-black)] hover:bg-gray-100'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="md:col-span-2">
        {activeContent && (
          <div className="p-4">
            <h3 className="text-3xl font-bold text-[var(--color-pink)]">
              {activeContent.heading}
            </h3>
            <p className="mt-4 text-lg text-[var(--color-dark-grey)]">
              {activeContent.description}
            </p>
            <p className="mt-4 text-base text-[var(--color-dark-grey)]">
              {activeContent.subtext}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}