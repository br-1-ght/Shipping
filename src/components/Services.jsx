import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: 'Trucking Services',
      description: 'We provide dependable trucking services throughout the United States, ensuring your freight arrives safely and on time.',
      icon: 'truck',
      image: '/images/services/ship3.webp'
    },
    {
      id: 2,
      title: 'Freight Forwarding',
      description: 'Our freight forwarding services optimize your transportation needs with cost-effective and efficient solutions.',
      icon: 'airplane',
      image: '/images/services/ship4.webp'
    },
    {
      id: 3,
      title: 'Warehousing',
      description: 'Our warehousing solutions provide secure storage for your goods with efficient inventory management systems.',
      icon: 'houses-fill',
      image: '/images/services/ship5.webp'
    },
    {
      id: 4,
      title: 'Expedited Shipping',
      description: 'When time is critical, our expedited shipping services ensure your cargo reaches its destination without delay.',
      icon: 'truck-flatbed',
      image: '/images/services/ship2.webp'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive logistics solutions for your business needs</p>
        </div>
        
        <div className="services-grid">
          {servicesList.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-img">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-info">
                <div className="service-icon">
                  <i className={`bi bi-${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;