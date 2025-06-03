 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap styles
import logo1 from '../assets/a1.jpg';

const BestDeal = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row align-items-center">
        
        {/* 3 cols - Left Image */}
        <div className="col-md-5">
          <img
            src={logo1}  // replace with your real image path
            alt="Left Visual"
            className="img-fluid rounded"
          />
        </div>
        
      {/* 4 cols - Text content */}
<div className="col-md-4">
  <h6 className="mb-2">Today's</h6>
  <h3 className="mb-3">Best Deal, grab it as Soon</h3>
  <p className="mb-4" style={{ maxWidth: '400px' }}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi odit at eius. In accusantium tempore placeat doloremque quod quae voluptatem, rem rerum, quo corporis non repellendus voluptatibus autem quis reiciendis.
  </p>

  {/* Card Component */}
  <div className="card shadow-sm border mb-3" style={{ backgroundColor: '#f9f9f9' }}>
    <div className="row g-0 align-items-center">
      {/* Image - 2 columns */}
      <div className="col-2">
        <img
          src="/assets/burger.jpg"  // Replace with your burger image path
          alt="Chicken Burger"
          className="img-fluid rounded-start"
        />
      </div>

      {/* Text - 10 columns */}
      <div className="col-10">
        <div className="card-body py-2">
          <h6 className="card-title mb-1">Chicken Burger</h6>
          <p className="card-text mb-1" style={{ fontSize: '0.85rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="card-text" style={{ fontSize: '0.75rem', color: '#888' }}>
            Tasty · Juicy · Affordable
          </p>
        </div>
      </div>
      
    </div>
  </div>
  <div className="card shadow-sm border mb-3" style={{ backgroundColor: '#f9f9f9' }}>
    <div className="row g-0 align-items-center">
      {/* Image - 2 columns */}
      <div className="col-2">
        <img
          src="/assets/burger.jpg"  // Replace with your burger image path
          alt="Chicken Burger"
          className="img-fluid rounded-start"
        />
      </div>

      {/* Text - 10 columns */}
      <div className="col-10">
        <div className="card-body py-2">
          <h6 className="card-title mb-1">Chicken Burger</h6>
          <p className="card-text mb-1" style={{ fontSize: '0.85rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="card-text" style={{ fontSize: '0.75rem', color: '#888' }}>
            Tasty · Juicy · Affordable
          </p>
        </div>
      </div>
      
    </div>
  </div>

  <button> Order Now</button>
</div>

        
        {/* 4 cols - Right Image */}
        <div className="col-md-3">
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

export default BestDeal;
