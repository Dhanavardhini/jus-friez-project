
import React from 'react';
import '../assets/styles/Footer.css';
import JusFriezlogo from '../assets/Jus Friez logo.jpg';

const Footer = () => {
  const scrollToHome = (e) => {
    e.preventDefault();
    const home = document.getElementById('home');
    if (home) home.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer bg-dark text-white pt-5 pb-3" id="footer">
      <div className="container">
        {/* Top Section */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <div className="logo-section d-flex align-items-center">
            <img src={JusFriezlogo} alt="Jus Friez" className='logo-img1' />
            <div>
              <h4 className="ms-2">Jus Friez</h4>
              <small className="ms-2">Fresh, Crispy & Delicious</small>
            </div>
          </div>
          <div className="order-now d-flex align-items-center">
            <h5 className="me-3 mb-0">Hungry? Order Your Favorite Snacks Now!</h5>
            <button
              className="btn btn-danger"
              onClick={() =>
                window.location.href = "https://www.swiggy.com/city/chennai/jus-friez-seethammal-extension-teynampet-rest1075205"
              }
            >
              Order Now
            </button>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Bottom Info Grid */}
        <div className="row text-start">
          <div className="col-md-3 mb-4">
            <h5>Our Location</h5>
            <p className="mb-1">Jus Friez Cafe | Alwarpet, Chennai</p>
            <p className="mb-1">
              Ground Floor, No.10/15, 2nd Cross St,<br />
              Seethammal Extension, Teynampet, Chennai, Tamil Nadu 600018
            </p>
            <a
              href="https://www.google.com/maps/place/Jus+Friez,+Seethammal+Extension,+Teynampet,+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              View on Google Maps
            </a>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <p className="mb-1">Phone: +91 98407 24068</p>
            <p className="mb-1">Email: support@urban-kitchens.in</p>
            <a href="tel:+919840724068" className="footer-link">Call Now</a>
          </div>
          
          

          <div className="col-md-3 mb-4">
            <h5>Working Hours</h5>
            <p className="mb-1">Mon - Sun: 6:00 AM - 1:30 PM</p>
            {/* <p className="mb-1">Saturday: 10:00 AM - 5:00 PM</p> */}
            <a href="#home" onClick={scrollToHome} className="footer-link">
              Visit Us Today
            </a>
          </div>

          <div className="col-md-3 mb-4">
            <h5>Follow Us</h5>
            <p>Stay updated with latest deals and offers!</p>
            <div className="d-flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61574798115989"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/jusfriez"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary mt-4" />
        <p className="text-center small mb-0">
          &copy; 2025 Jus Friez. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
