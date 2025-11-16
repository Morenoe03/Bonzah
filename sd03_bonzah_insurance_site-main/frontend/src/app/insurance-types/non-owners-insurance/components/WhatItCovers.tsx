// comment for adding
"use client";

import { useState } from "react";

const coverageData = {
  covers: {
    heading: "What It Covers (Liability)",
    points: [
      "Bodily Injury Liability: Covers medical expenses for others if you cause an accident.",
      "Property Damage Liability: Covers damage to someone else's car or property in an at-fault accident.",
      "Uninsured/Underinsured Motorist: Can provide coverage if you're hit by a driver who doesn't have enough insurance.",
      "Medical Payments (MedPay): May be available to cover your own injuries, regardless of fault."
    ]
  },
  notCovers: {
    heading: "What It Does NOT Cover",
    points: [
      "The Car You Are Driving: This policy does NOT include Collision or Comprehensive. Damage to the car you rent or borrow is NOT covered.",
      "Your Belongings: Your personal items (like a laptop or phone) stolen from the car are not covered.",
      "Household Vehicles: It does not cover any vehicle owned by you or anyone in your household.",
      "Business Use: It does not cover driving for rideshare (Uber/Lyft) or delivery services."
    ]
  }
};

export default function WhatItCovers() {
  const [activeTab, setActiveTab] = useState("covers");

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[var(--color-black)] mb-8">
        Understanding Your Coverage
      </h2>
      <div className="flex justify-center mb-4 border-b-2 border-gray-200">
        <button
          onClick={() => setActiveTab("covers")}
          className={`px-6 py-3 font-semibold text-lg transition-all ${
            activeTab === "covers"
              ? 'border-b-4 border-[var(--color-pink)] text-[var(--color-pink)]'
              : 'text-[var(--color-dark-grey)] hover:bg-gray-100'
          }`}
        >
          What It Covers
        </button>
        <button
          onClick={() => setActiveTab("notCovers")}
          className={`px-6 py-3 font-semibold text-lg transition-all ${
            activeTab === "notCovers"
              ? 'border-b-4 border-[var(--color-pink)] text-[var(--color-pink)]'
              : 'text-[var(--color-dark-grey)] hover:bg-gray-100'
          }`}
        >
          What It Doesn't Cover
        </button>
      </div>
      
      <div className="p-6 bg-white rounded-lg shadow-lg">
        {activeTab === 'covers' && (
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-black)] mb-4">{coverageData.covers.heading}</h3>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-dark-grey)]">
              {coverageData.covers.points.map(point => <li key={point}>{point}</li>)}
            </ul>
          </div>
        )}
        
        {activeTab === 'notCovers' && (
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-4">{coverageData.notCovers.heading}</h3>
            <p className="text-sm text-red-600 font-semibold mb-4">IMPORTANT: This policy is for liability only and does not cover damage to the vehicle you are driving.</p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-dark-grey)]">
              {coverageData.notCovers.points.map(point => <li key={point}>{point}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}