import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FoodMenu = () => {
  return (
    <div className="container my-5 text-center">
      {/* Title */}
      <h2 className="mb-2">Food Items</h2>

      {/* Subtitle */}
      <h4 className="mb-3 text-danger">Popular Menu</h4>

      {/* Paragraph */}
      <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
      </p>

      {/* 6 Cards Row */}
      <div className="row">
        {[...Array(6)].map((_, index) => (
          <div className="col-md-4 col-lg-2 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={`/assets/food${index + 1}.jpg`}
                className="card-img-top"
                alt={`Food ${index + 1}`}
                style={{ height: '120px', objectFit: 'cover' }}
              />
              <div className="card-body p-2">
                <h6 className="card-title m-0">Food {index + 1}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section: 2 Cards Left, 1 Card Right */}
      <div className="row mt-5 text-start">
        {/* Left Side: 2 stacked cards */}
        <div className="col-lg-8">
          {[1, 2].map((num) => (
            <div className="card mb-4 p-3 shadow-sm" key={num}>
              <div className="row g-0 align-items-center">
                <div className="col-md-4">
                  <img
                    src={`/assets/burger${num}.jpg`}
                    className="img-fluid rounded"
                    alt={`Chicken Burger ${num}`}
                    style={{ height: '100px', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-8 ps-3">
                  <h5 className="card-title mb-2">Chicken Burger</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ex impedit quas.
                  </p>
                  <button className="btn btn-danger btn-sm">Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: 1 larger card */}
        <div className="col-lg-4">
          <div className="card p-3 shadow-sm h-100">
            <img
              src="/assets/burger3.jpg"
              className="img-fluid rounded mb-3"
              alt="Burger Special"
              style={{ height: '180px', objectFit: 'cover' }}
            />
            <h5 className="card-title">Burger</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ex impedit quas.
            </p>
            <button className="btn btn-danger btn-sm">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
