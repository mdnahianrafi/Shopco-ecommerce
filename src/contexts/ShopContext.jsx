import React, { createContext } from "react";
import all_product from "../assets/Data/productData";
import { new_arrivals, top_selling } from "../assets/Data/frontProductData.js"; // ⬅ direct import

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
export const ShopContext = createContext(null);

 export const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
  }
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
  }

  return stars;
}; 

const ShopContextProvider = ({ children }) => {
  const contextValue = {
    all_product,
    new_arrivals,
    top_selling,
    renderStars,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
