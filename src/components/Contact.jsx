import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Get in touch with our team for all your logistics needs</p>
        </div>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i class="bi bi-map"></i>
              </div>
              <div className="info-content">
                <h3>Our Location</h3>
                <p>123 Logistics Blvd, Suite 100<br />Houston, TX 77001</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i class="bi bi-telephone"></i>
              </div>
              <div className="info-content">
                <h3>Call Us</h3>
                <p>(123) 456-7890<br />(987) 654-3210</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i class="bi bi-envelope-at-fill"></i>
              </div>
              <div className="info-content">
                <h3>Email Us</h3>
                <p>info@xpresscargologistics.com<br />support@xpresscargologistics.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i class="bi bi-clock"></i>
              </div>
              <div className="info-content">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Your Phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {formStatus.submitted && (
                <div className="form-success">
                  Thank you for your message! We'll get back to you shortly.
                </div>
              )}
              
              {formStatus.error && (
                <div className="form-error">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
        
        <div className="map-container">
          <iframe 
            title="office-location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15857.678663289225!2d3.6306943999999906!3d6.468403199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1747222338501!5m2!1sen!2sng"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;