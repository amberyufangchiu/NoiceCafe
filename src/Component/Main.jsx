import React from "react";
import Desc from "./Desc";
import StoryOfNoice from "./StoryOfNoice";
import Carousel from "./Carousel";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <Desc />
      <StoryOfNoice />
      <Carousel />
      <ContactUs />
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
