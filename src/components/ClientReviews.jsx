import React from 'react';
import { FaStar} from 'react-icons/fa';

const reviews = [
  {
    name: "Aman Tripathi",
    company: "JoinYourTrip, Delhi",
    feedback:
      "Legafin has been instrumental in guiding our company through complex regulatory challenges.",
  },
  {
    name: "Sudip Lingthep",
    company: "HigherTrekking, Nepal",
    feedback:
      "They delivered innovative solutions that significantly streamlined our operations.",
  },
  {
    name: "Hans Dariwal",
    company: "Gutur House, Leh",
    feedback:
      "Their personalized attention to our business needs has been outstanding.",
  },
];

const ClientReviews = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-200 to-blue-400 text-white py-10 mr-2">
      <div className="w-full mx-auto px-4 text-center mb-10">
        <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
          Client Reviews
        </span>
        <p className="text-xl font-bold mt-2 text-yellow-700">Rated 4.9 of 5</p>
        <h2 className="text-3xl font-bold mt-4 text-blue-800">What Our Clients Say About Us</h2>
        <p className="text-blue-600 mt-1">5-Star Rated Legafin</p>
        <div className="flex justify-center gap-1 mt-4">
          {[...Array(5)].map((_, idx) => (
            <FaStar key={idx} className="text-yellow-400 text-xl" />
          ))}
        </div>
        <button className="mt-6 bg-gray-800 text-white px-6 py-2 rounded shadow font-semibold hover:bg-blue-800 transition">
          Explore Our Services &gt;
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-sm"
          >
            <p className="mb-4">{review.feedback}</p>
            <div className="flex items-center text-yellow-400 mb-2">
              {[...Array(5)].map((_, idx) => (
                <FaStar key={idx} />
              ))}
            </div>
            <h4 className="font-bold">{review.name}</h4>
            <p className="text-sm text-gray-600">{review.company}</p>
          </div>
        ))}
      </div>
      </div>
  );
};

export default ClientReviews;