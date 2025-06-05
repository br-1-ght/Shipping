// TrackingResult.js
import '../styles/TrackingResult.css';

const TrackingResult = ({ trackingData }) => {
  if (!trackingData) return null;

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'order placed':
        return '📦';
      case 'package picked up':
        return '✅';
      case 'in transit':
        return '🚛';
      case 'out for delivery':
        return '📍';
      case 'delivered':
        return '✅';
      default:
        return '⏰';
    }
  };

  return (
    <div className="tracking-result-container">
      {/* Package Status Card */}
      <div className="status-card">
        <div className="status-header">
          <div className="status-info">
            <h2 className="tracking-number">
              Tracking #{trackingData.trackingNumber}
            </h2>
            <p className="status-label">Current Status</p>
          </div>
          <div className="status-badge-container">
            <span className="status-badge">
              {trackingData.status}
            </span>
          </div>
        </div>
        
        <div className="status-details">
          <div className="detail-item">
            <span className="detail-icon">📍</span>
            <div className="detail-content">
              <p className="detail-label">Current Location</p>
              <p className="detail-value">{trackingData.currentLocation}</p>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-icon">⏰</span>
            <div className="detail-content">
              <p className="detail-label">Est. Delivery</p>
              <p className="detail-value">{trackingData.estimatedDelivery}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="timeline-container">
        <h3 className="timeline-title">Tracking History</h3>
        <div className="timeline">
          {trackingData.timeline.map((item, index) => (
            <div key={index} className={`timeline-item ${item.completed ? 'completed' : 'pending'}`}>
              <div className="timeline-marker">
                <span className="timeline-icon">{getStatusIcon(item.status)}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-status">{item.status}</div>
                <div className="timeline-location">{item.location}</div>
                <div className="timeline-datetime">
                  {item.date} {item.time !== 'Pending' ? `at ${item.time}` : ''}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackingResult;