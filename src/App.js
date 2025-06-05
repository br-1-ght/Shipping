import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TrackingInput from './components/TrackingInput';
import TrackingResult from './components/TrackingResult';
import './styles/App.css';

function App() {
  const [trackingData, setTrackingData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock tracking data for demonstration
  const mockTrackingData = {
    trackingNumber: '',
    status: 'In Transit',
    estimatedDelivery: '2025-06-08',
    currentLocation: 'Lagos Distribution Center',
    timeline: [
      {
        status: 'Order Placed',
        location: 'Online',
        date: '2025-06-03',
        time: '14:30',
        completed: true
      },
      {
        status: 'Package Picked Up',
        location: 'Ikeja Warehouse',
        date: '2025-06-04',
        time: '09:15',
        completed: true
      },
      {
        status: 'In Transit',
        location: 'Lagos Distribution Center',
        date: '2025-06-05',
        time: '12:45',
        completed: true
      },
      {
        status: 'Out for Delivery',
        location: 'Local Delivery Hub',
        date: '2025-06-08',
        time: 'Pending',
        completed: false
      },
      {
        status: 'Delivered',
        location: 'Destination Address',
        date: '2025-06-08',
        time: 'Pending',
        completed: false
      }
    ]
  };

  const handleTrack = async (trackingNumber) => {
    setError('');
    setIsLoading(true);
    setTrackingData(null);

    // Simulate API call
    setTimeout(() => {
      if (trackingNumber.toLowerCase().includes('sp') || trackingNumber.length >= 6) {
        setTrackingData({
          ...mockTrackingData,
          trackingNumber: trackingNumber
        });
        setError('');
      } else {
        setError('Tracking number not found. Please check and try again.');
        setTrackingData(null);
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      
      {/* Tracking Section */}
      <section id="tracking" className="tracking-section">
        <div className="container">
          <TrackingInput onTrack={handleTrack} isLoading={isLoading} />
          
          {error && (
            <div className="tracking-error-container">
              <div className="tracking-error-message">
                <p>{error}</p>
              </div>
            </div>
          )}
          
          <TrackingResult trackingData={trackingData} />
        </div>
      </section>
      
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;