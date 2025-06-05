// TrackingInput.js
import { useState } from 'react'; // Types are now bundled!
import '../styles/TrackingInput.css';

const TrackingInput = ({ onTrack, isLoading }) => {
  const [trackingNumber, setTrackingNumber]= useState('')
  const [error, setError]= useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }
    setError('');
    onTrack(trackingNumber);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="tracking-input-container">
      <div className="tracking-header">
        <h1 className="tracking-title">Track Your Package</h1>
        <p className="tracking-subtitle">Enter your tracking number to see real-time updates</p>
      </div>

      <form className="tracking-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Tracking number"
            className="tracking-input"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="track-button"
          >
            {isLoading ? (
              <div className="loading-spinner"></div>
            ) : (
              <>
                <span className="track-icon">🔍</span>
                Track
              </>
            )}
          </button>
        </div>
      </form>

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default TrackingInput;