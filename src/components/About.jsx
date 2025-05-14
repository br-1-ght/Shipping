import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img">
            <img src="/images/ship1.webp" alt="About Xpress Cargo Logistics" />
          </div>
          
          <div className="about-content">
            <div className="section-header">
              <h2>About Us</h2>
              <p>Your reliable partner in the logistics industry</p>
            </div>
            
            <p>Xpress Cargo Logistics LLC is a leading provider of comprehensive logistics solutions across the United States. With years of experience in the industry, we have built a reputation for reliability, efficiency, and customer satisfaction.</p>
            
            <p>Our team of dedicated professionals is committed to delivering exceptional service and innovative solutions to meet your unique transportation needs. We leverage advanced technology and industry expertise to optimize your supply chain and enhance your business operations.</p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h3>10+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat-item">
                <h3>500+</h3>
                <p>Satisfied Clients</p>
              </div>
              <div className="stat-item">
                <h3>48</h3>
                <p>States Covered</p>
              </div>
            </div>
            
            <a href="#contact" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;