import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import Image from "next/image";

interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  description: string;
  image: string;
  category: string;
}

{/* Dummy data to show articles */}
const dummyArticles: Article[] = [
  {
    id: 1,
    title: "Best Car Insurance in Tennessee for August 2025",
    author: "Xuyun Zeng",
    date: "Jul 29, 2025",
    description:
      "Geico is the best car insurance company in Tennessee, according to Jerry's editorial analysis.",
    image: "/images/tennessee.jpg",
    category: "Car Insurance",
  },
  {
    id: 2,
    title: "Best Car Insurance in Colorado for August 2025",
    author: "Ben Moore",
    date: "Jul 29, 2025",
    description:
      "Auto-Owners is the best car insurance company in Colorado, according to Jerry's analysis.",
    image: "/images/colorado.jpg",
    category: "Car Insurance",
  },
  {
    id: 3,
    title: "Best Car Insurance in Florida for August 2025",
    author: "Ben Moore",
    date: "Jul 29, 2025",
    description:
      "Auto-Owners is the best car insurance company in Florida, according to Jerry's editorial analysis.",
    image: "/images/florida.jpg",
    category: "Car Insurance",
  },
];

const categories = [
  "Car Insurance",
  "State Laws",
  "Home Insurance",
  "Renters Insurance",
  "Pet Insurance",
  "Travel Insurance",
];

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState("Car Insurance");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = dummyArticles.filter(
    (article) =>
      article.category === selectedCategory &&
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="section text-center">
      <h1 className="flex text-3xl font-bold text-gray-900 mb-4 justify-center">Resources</h1>

      {/* Search Bar */}
      <div className="relative w-full max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Tell us what you're looking for"
          className="w-full border border-[var(--color-light-grey)] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-pink)]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--color-pink)] text-white rounded-full p-2"
        >
          <Search size={16} />
        </button>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              selectedCategory === cat
                ? "bg-[var(--color-black)] text-[var(--color-white)] border-[var(--color-black)]"
                : "bg-[var(--color-white)] text-[var(--color-dark-grey)] border-[var(--color-light-grey)] hover:bg-[var(--color-light-pink)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid for articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} className="card text-left">
              {/* Image */}
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Meta */}
              <p className="text-xs muted mb-1">
                {article.author}, {article.date}
              </p>

              {/* Title */}
              <h2 className="text-lg font-semibold mb-2 text-[var(--color-black)]">
                {article.title}
              </h2>

              {/* Description */}
              <p className="text-sm muted mb-4">{article.description}</p>

              {/* Read More */}
              <button className="text-[var(--color-pink)] text-sm font-medium flex items-center gap-1 hover:underline">
                Read More <ArrowRight size={14} />
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-[var(--color-dark-grey)]">
            No articles found for "{searchTerm}".
          </p>
        )}
      </div>

      {/* Quote Button */}
      <button className="btn-primary px-6 py-3 text-base font-semibold">
        Get Your Quote
      </button>
    </section>
  );
}
