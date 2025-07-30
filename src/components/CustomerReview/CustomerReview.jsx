import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const reviews = [
  { name: "Sarah M.", review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations." },
  { name: "John D.", review: "Good service and fast delivery. I love the unique designs. Definitely will buy again!" },
  { name: "Emily R.", review: "Comfortable and stylish clothing. But I would love to see more color options." },
  { name: "David P.", review: "Great value for money! Customer support was also very responsive and helpful." },
  { name: "Linda G.", review: "Everything fits perfectly and looks amazing. Highly recommended!" },
  { name: "Robert K.", review: "Shop.co always delivers quality. Been shopping here for over a year now." }
];

const CustomerReview = () => {
  const [expandedReviewIndex, setExpandedReviewIndex] = useState(null);
  const toggleReadMore = (index) => setExpandedReviewIndex(expandedReviewIndex === index ? null : index);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 460, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="overflow-x-hidden pt-24 pb-48 container mx-auto px-4">
      <h1 className="pb-11 text-center md:text-start text-2xl  md:text-4xl lg:text-5xl md:ml-3 font-bold integral-font">Our Happy Customers</h1>
      {/* Slider container with overflow hidden only on track */}
<div className="">
        <Slider {...settings} className="">
        {reviews.map((item, index) => (
          <div key={index} className="px-2 box-border">
            <div className="min-h-[270px] h-full flex flex-col justify-between pt-8 pb-6 px-6 border border-gray-300 rounded-3xl bg-white">
              <div>
                <div className="flex space-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-2xl text-[#FFC633]" />
                  ))}
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <h1 className="text-xl font-bold satoshi-font">{item.name}</h1>
                  <FaCheckCircle className="text-green-500 text-xl" />
                </div>
                <div className={"review-text " + (expandedReviewIndex === index ? "expanded" : "")}>
                  {item.review}
                </div>
                {item.review.length > 120 && (
                  <button onClick={() => toggleReadMore(index)} className="text-blue-600 underline text-sm mt-1 cursor-pointer">
                    {expandedReviewIndex === index ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
</div>
    </section>
  );
};

export default CustomerReview;
