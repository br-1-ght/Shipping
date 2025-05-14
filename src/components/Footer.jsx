import React from 'react';
// import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col">
            <div className="footer-logo">
              <img src="/images/logo.webp" alt="Xpress Cargo Logistics LLC" />
              <h3>Xpress Cargo <span>Logistics LLC</span></h3>
            </div>
            <p>Providing reliable logistics solutions across the United States, we strive to exceed customer expectations with every delivery.</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i class="bi bi-twitter"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Trucking Services</a></li>
              <li><a href="#services">Freight Forwarding</a></li>
              <li><a href="#services">Warehousing</a></li>
              <li><a href="#services">Expedited Shipping</a></li>
              <li><a href="#services">Supply Chain Solutions</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <i class="bi bi-map"></i>
                <p>123 Logistics Blvd, Suite 100<br />Houston, TX 77001</p>
              </div>
              <div className="contact-item">
                <i class="bi bi-telephone"></i>
                <p>(123) 456-7890</p>
              </div>
              <div className="contact-item">
                <i class="bi bi-envelope-at-fill"></i>
                <p>info@xpresscargologistics.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Xpress Cargo Logistics LLC. All Rights Reserved.</p>
          <ul className="footer-legal">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;