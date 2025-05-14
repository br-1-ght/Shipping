import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1>Your Trusted Partner in Logistics Solutions</h1>
          <p>We provide efficient and reliable transportation services across the United States.</p>
          <div className="hero-btns">
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="#contact" className="btn btn-outline">Get a Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;