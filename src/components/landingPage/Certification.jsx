import React, { useState } from 'react';
import { certificationsData } from '@/data/certificate';

function Certification() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificationsData.slice(0, visibleCount).map((cert) => (
            <div
              key={cert.id}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg flex flex-col items-center text-center transition-transform hover:shadow-2xl hover:scale-105"
            >
              <img
                src={cert.logo}
                alt={`${cert.issuer} Logo`}
                className="w-80 h-80 object-contain mb-6"
              />
              <h3 className="text-2xl font-semibold text-black mb-2">
                {cert.title}
              </h3>
              <p className="text-lg font-medium text-gray-700 mb-1">
                {cert.issuer}
              </p>
              <p className="text-gray-500 mb-6">{cert.duration}</p>
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline font-semibold transition-colors"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < certificationsData.length && (
          <div className="mt-10 text-center">
            <button
              onClick={handleViewMore}
              className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Certification;