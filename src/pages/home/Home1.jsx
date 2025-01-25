import React from 'react';
import Hero from '../../components/heroHomepage/Hero';
import AboutUs from '../../components/about/About';
import Navigation from '../../components/navigation/Nvaigation';
import Services from '../../components/whatWeOffer/Services';

const Home1 = ({ Category }) => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Us Section */}
      <section id="about">
        <AboutUs />
      </section>

      {/* Navigation Section */}
      <section >
        <Navigation />
      </section>

      {/* Offerings Section */}
      <section id="offerings">
        <Services categories={Category} />
      </section>
    </>
  );
};

export default Home1;
