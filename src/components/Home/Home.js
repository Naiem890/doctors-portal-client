import React from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import ContactUs from "../ContactUs/ContactUs";
import Feature from "../Feature/Feature";
import Hero from "../Hero/Hero";
import Info from "../Info/Info";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Info></Info>
      <Services></Services>
      <Feature></Feature>
      <AppointmentBanner></AppointmentBanner>
      <Reviews></Reviews>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
