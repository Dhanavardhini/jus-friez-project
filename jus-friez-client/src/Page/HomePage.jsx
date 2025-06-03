import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap styles
import logo1 from '../assets/a1.jpg';

const HomePage = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row align-items-center">
        
        {/* 3 cols - Left Image */}
        <div className="col-md-3">
          <img
            src={logo1}  // replace with your real image path
            alt="Left Visual"
            className="img-fluid rounded"
          />
        </div>
        
        {/* 5 cols - Text content */}
        <div className="col-md-4">
          <h6 className="mb-2">Enjoy your day</h6>
          <h3 className="mb-3">with our delicious food</h3>
          <p className="mb-4" style={{ maxWidth: '400px' }}>
            It is a long established fact that a est reader will be distracted.
          </p>

          <button className="btn btn-danger pencil-btn mb-4">
            30% OFF
          </button>

          <div className="d-flex align-items-center gap-3">
            <img
              src={logo1}  // replace with your small image
              alt="Small visual"
              className="img-fluid"
              style={{ width: '50px', height: '50px' }}
            />
            <div>
              <p className="mb-1" style={{ color: '#ff9800', fontWeight: 'bold', marginBottom: 0 }}>
                Get Free Delivery
              </p>
              <p className="mb-0" style={{ fontWeight: 'bold' }}>+12 123 4567 891</p>
            </div>
          </div>
        </div>
        
        {/* 4 cols - Right Image */}
        <div className="col-md-5">
          <img
            src={logo1}  // replace with your right image
            alt="Right Visual"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
