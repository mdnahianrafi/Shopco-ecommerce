import React, { useState } from "react";

const initialReviews = [
  {
    name: "Samantha D.",
    date: "August 14, 2023",
    rating: 4.5,
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable...",
  },
  {
    name: "Alex M.",
    date: "August 15, 2023",
    rating: 5,
    text: "Exceeded my expectations! The colors are vibrant and the print quality is top-notch...",
  },
  {
    name: "Ethan R.",
    date: "August 16, 2023",
    rating: 4.5,
    text: "Must-have for anyone who appreciates good design. Minimalistic yet stylish.",
  },
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("reviews");
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [reviews, setReviews] = useState(initialReviews);

  // Review form state
  const [showForm, setShowForm] = useState(false);
  const [reviewInput, setReviewInput] = useState({
    name: "",
    text: "",
    rating: 5,
  });

  const handleTabClick = (tab) => setActiveTab(tab);

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => prev + 3);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const half = rating % 1 >= 0.5;

    return (
      <div className="flex text-yellow-500 text-lg mb-1">
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <span key={i}>★</span>
          ))}
        {half && <span>½</span>}
      </div>
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      ...reviewInput,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    setReviews((prev) => [newReview, ...prev]);
    setReviewInput({ name: "", text: "", rating: 5 });
    setShowForm(false);
    setVisibleReviews((prev) => prev + 1); // Show new review
  };

  return (
    <div className="mt-10 satoshi-font">
      {/* Tabs */}
      <div className="grid grid-cols-3 text-center border-b border-gray-300">
        {["details", "reviews", "faqs"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`py-4 font-semibold text-base transition ${
              activeTab === tab
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab === "details" && "Product Details"}
            {tab === "reviews" && "Rating & Reviews"}
            {tab === "faqs" && "FAQs"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "details" && (
          <div className="text-gray-700 px-4">
            <h2 className="text-xl font-semibold mb-2">Product Description</h2>
            <p>
              This t-shirt is crafted from 100% organic cotton and is designed
              for comfort, style, and sustainability.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
              <h2 className="text-xl font-semibold">
                All Reviews ({reviews.length})
              </h2>
              <div className="flex space-x-4">
                <select className="border rounded px-2 py-1 text-sm">
                  <option>Latest</option>
                  <option>Top Rated</option>
                </select>
                <button
                  className="bg-black text-white text-sm px-4 py-2 rounded-full"
                  onClick={() => setShowForm(!showForm)}
                >
                  {showForm ? "Cancel" : "Write a Review"}
                </button>
              </div>
            </div>

            {/* Review Form */}
            {showForm && (
              <form
                onSubmit={handleReviewSubmit}
                className="mb-6 border p-4 rounded-md bg-gray-50"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={reviewInput.name}
                  onChange={handleInputChange}
                  className="block w-full mb-3 px-3 py-2 border rounded"
                />
                <textarea
                  name="text"
                  placeholder="Write your review..."
                  required
                  value={reviewInput.text}
                  onChange={handleInputChange}
                  className="block w-full mb-3 px-3 py-2 border rounded"
                />
                <select
                  name="rating"
                  value={reviewInput.rating}
                  onChange={handleInputChange}
                  className="block mb-3 px-3 py-2 border rounded"
                >
                  {[5, 4.5, 4, 3.5, 3].map((rate) => (
                    <option key={rate} value={rate}>
                      {rate} Stars
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-full"
                >
                  Submit Review
                </button>
              </form>
            )}

            {/* Review List */}
            <div className="grid md:grid-cols-2 gap-4">
              {reviews.slice(0, visibleReviews).map((review, index) => (
                <div
                  key={index}
                  className="border border-gray-300 px-2 py-5 rounded-lg shadow-sm bg-white"
                >
                  {renderStars(review.rating)}
                  <h3 className="font-bold mt-1">{review.name}</h3>
                  <p className="text-sm text-gray-700 mt-1">{review.text}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    Posted on {review.date}
                  </p>
                </div>
              ))}
            </div>

            {visibleReviews < reviews.length && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={loadMoreReviews}
                  className=" border-gray-300 px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white transition"
                >
                  Load More Reviews
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === "faqs" && (
          <div className="text-gray-700 px-4">
            <h2 className="text-xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <ul className="space-y-4">
              <li>
                <strong>Q: What material is the t-shirt made of?</strong>
                <p>A: 100% organic cotton for ultimate comfort.</p>
              </li>
              <li>
                <strong>Q: Do you offer international shipping?</strong>
                <p>A: Yes, with tracking support worldwide.</p>
              </li>
              <li>
                <strong>Q: Can I return the product?</strong>
                <p>A: Yes, within 30 days of purchase.</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
