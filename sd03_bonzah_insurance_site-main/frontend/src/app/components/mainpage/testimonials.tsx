"use client";

import { useEffect, useState } from "react";

interface Review {
  id: string;
  rating: string;
  text: string;
  author: string;
  date: string;
  company: string;
}

export default function Testimonials() {
  const [review, setReview] = useState<Review | null>(null);

  useEffect(() => {
    async function fetchReview() {
      try {
        const res = await fetch("http://localhost:3001/reviews");
        const data = await res.json();

        // ✅ Pick a random review if there are any
        if (Array.isArray(data) && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setReview(data[randomIndex]);
        } else {
          console.warn("No reviews found");
        }
      } catch (error) {
        console.error("Error fetching review:", error);
      }
    }
    fetchReview();
  }, []);

  return (
    <section
      className="relative bg-gray-900 text-white"
      style={{
        backgroundImage: "url('placeholder.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Text column */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Insurance Trusted <br /> by Bonzah Customers
          </h2>
          <p className="text-base sm:text-lg text-gray-200">
            Real stories from real customers who trust us with their protection
          </p>
        </div>

        {/* Testimonial card */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white text-black shadow-lg rounded-xl p-4 sm:p-6 max-w-sm sm:max-w-md transform rotate-0 sm:rotate-2">
            {review ? (
              <>
                <div className="flex mb-3 sm:mb-4 text-yellow-400 text-lg sm:text-xl">
                  {"★".repeat(Number(review.rating))}
                </div>

                <p className="italic mb-3 sm:mb-4 text-sm sm:text-base">
                  "{review.text}"
                </p>

                <p className="font-bold text-sm sm:text-base">{review.author}</p>
                {review.company && (
                  <p className="text-sm text-gray-700">{review.company}</p>
                )}
                <p className="text-xs sm:text-sm text-gray-600">
                  Reviewed on {new Date(review.date).toLocaleDateString()}
                </p>
              </>
            ) : (
              <p className="text-gray-600">Loading testimonial...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
