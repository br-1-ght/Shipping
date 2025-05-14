import React, { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO, ABC Manufacturing',
      text: 'Xpress Cargo Logistics has been instrumental in streamlining our supply chain operations. Their reliable service and attention to detail have made them an invaluable partner for our business.',
      image: '/images/testimonials/client1.jpg'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Operations Manager, XYZ Retail',
      text: 'We have been working with Xpress Cargo for over 5 years now, and their consistent performance and flexibility in handling our logistics needs have been exceptional. Highly recommended!',
      image: '/images/testimonials/client2.jpg'
    },
    {
      id: 3,
      name: 'Michael Brown',
      position: 'Supply Chain Director, Global Foods',
      text: 'The team at Xpress Cargo Logistics understands our unique requirements and always delivers on time, every time. Their customer service is top-notch, and they truly go above and beyond.',
      image: '/images/testimonials/client3.jpg'
    }
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Testimonials from our satisfied customers</p>
        </div>
        
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`testimonial-item ${index === active ? 'active' : ''}`}
            >
              <div className="testimonial-content">
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === active ? 'active' : ''}`}
              onClick={() => setActive(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;