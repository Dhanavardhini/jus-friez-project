

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/BestDeal.css';

import bestDeal1 from '../assets/bestDeal1.png';
import bestDeal from '../assets/Bestdeala1.png';
import bestDeal2 from '../assets/bestdeal2.png';
import sideImage from '../assets/bestright.png';

const dealItems = [
  {
    title: "Salted French Friez Bucket",
    description: "100g of French friez salted with tangy tomato sauce",
    tags: "Tasty · Juicy · Affordable",
    image: bestDeal1,
  },
  {
    title: "Zesty Jalapeno Nacho Chips",
    description: "Double layered crispy Jalapeno chips and Jalapeno dressing  and served with classic mayo, salsa",
    tags: "Veg · Spicy · Filling",
    image: bestDeal2,
  },
];

const BestDeal = () => {
  return (
    <div className="container-fluid container-fluid-deal">
      <div className="row align-items-center flex-wrap flex-lg-row flex-column">

        {/* Left Image */}
        <div className="col-lg-5 mb-4 d-flex justify-content-center justify-content-lg-start">
  <img
    src={bestDeal}
    alt="Left Visual"
    className="img-fluid img-big-deal"
  />
</div>


        {/* Text & Cards */}
        <div className="col-lg-5 text-lg-start text-center mt-4 mt-lg-0 order-2">
          <h6 className="text-muted">Today's</h6>
          <h3 className="deal-heading">Best Deal, grab it as Soon</h3>
          <p className="deal-description mx-auto">
            Don't miss our delicious deals crafted with quality and taste. Perfect for your cravings!
          </p>

          {dealItems.map((item, index) => (
            <div className="card deal-card mx-md-0 mx-auto" key={index}>
              <div className="d-flex flex-column flex-md-row align-items-center">
                <div className="deal-img-container ms-4 mb-2 mb-md-0 me-md-3 text-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                    style={{ width: '110px', height: '90px', objectFit: 'contain' }}
                  />
                </div>
                <div className="card-body text-md-start text-center">
                  <h6 className="card-title mb-1">{item.title}</h6>
                  <p className="card-text small mb-1">{item.description}</p>
                  <p className="card-text tiny text-muted">{item.tags}</p>
                </div>
              </div>
            </div>
          ))}

          <button
            className="btn order-btn-alt mt-3 w-md-auto w-20"
            onClick={() =>
              window.location.href = "https://www.swiggy.com/city/chennai/jus-friez-seethammal-extension-teynampet-rest1075205"
            }
          >
            Order Now
          </button>
        </div>

        {/* Right Image */}
        <div className="col-lg-2 d-flex justify-content-center justify-content-lg-end order-3 mt-4 mt-lg-0">
          <img
            src={sideImage}
            alt="Right Visual"
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  );
};

export default BestDeal;
