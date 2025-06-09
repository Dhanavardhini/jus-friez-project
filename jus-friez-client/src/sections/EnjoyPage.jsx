import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import enjoy from '../assets/leftter.jpg';
import '../assets/styles/EnjoyPage.css';  // make sure path is correct


function EnjoyPage() {
  return (
    <div className="container-fluid bg-black my-5">
      <div className="row align-items-center">
        {/* Left - Image */}
        <div className="col-md-5  mb-md-0 d-flex justify-content-center justify-content-md-start">
  <img
    src={enjoy}
    alt="Enjoy Offer"
    className="img-fluid rounded enjoy-image"
    style={{ maxHeight: '350px', objectFit: 'cover' }}
  />
</div>


        {/* Right - Text content */}
        <div className="col-md-7 text-center text-md-start">
          <h2 className="mb-3 text-white">Enjoy 50% Off on Your Favorite Crispy Treats!</h2>
          <p className="mb-4 text-white">Savor the crunch and flavor with our exclusive 50% discount on all your favorite fries, buckets, and snacks. Whether you're craving Veg Fries, Momos, or Zingy Pops, now's the perfect time to indulge and save big. Hurry, this tasty offer is just for you!</p>
          {/* <button className="btn btn-warning fw-bold px-4 py-2">Enjoy Now</button> */}
        <button
  className="btn fw-bold px-4 py-2 mb-2 enjoy-btn"
  onClick={() =>
    window.location.href = "https://www.swiggy.com/city/chennai/jus-friez-seethammal-extension-teynampet-rest1075205"
  }
>
  Enjoy Now
</button>


        </div>
      </div>
    </div>
  );
}

export default EnjoyPage;
