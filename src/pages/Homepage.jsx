import React from "react";

import NewArrival from "../components/NewArrival/NewArrival";
import TopSelling from "../components/TopSelling/TopSelling";
import BrowseStyle from "../components/BrowseStyle/BrowseStyle";
import CustomerReview from "../components/CustomerReview/CustomerReview";
import Hero from "../components/Hero/Hero";

const Homepage = () => {
  return (
    <>
      <section>
        <Hero />
        <NewArrival />
        <TopSelling />
        <BrowseStyle />
        <CustomerReview />
      </section>
    </>
  );
};

export default Homepage;
