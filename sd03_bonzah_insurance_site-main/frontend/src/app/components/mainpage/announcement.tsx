"use client";

import React, { useState, useEffect } from "react";

export default function Announcement() {
  const herolines = [
    `Protection for life in motion—Auto, Home, Renters, Pet, Commercial Real Estate & Business from Bonzah Insurance.\nWherever you’re headed, we’ve got you covered.`,

    `Coverage for wherever life moves—from your ride to your roof to your business.\n`,

    `Move fast. Stay covered. Simple insurance for how you drive, live, and build.\n`,

    `From weekends to what-ifs. Flexible coverage for your wheels, home, and business.\n`
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % herolines.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center px-4 py-12 bg-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-raleway font-bold">
        Bonzah Insurance.
      </h1>

      <h1 className="text-2xl sm:text-4xl md:text-5xl font-raleway font-bold text-pink-500 mb-4">
        That Covered Feeling.
      </h1>

      <div className="text-base sm:text-lg md:text-xl whitespace-pre-line transition-opacity duration-1000 min-h-[4rem] flex items-center justify-center">
        {herolines[current]}
      </div>
    </section>
  );
}
