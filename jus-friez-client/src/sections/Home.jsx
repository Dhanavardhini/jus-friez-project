
import React from 'react';
import Navbar from '../components/Navbar';
import HomePage from '../Page/HomePage';
import BestDeal from './BestDeal';
import FoodMenu from './FoodMenu';
import BlogAndNews from './BlogAndNews';
import EnjoyPage from './EnjoyPage';
import Testimonials from './Testimonials';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />

      <div id="home">
        <HomePage />
      </div>

      <div id="bestdeal">
        <BestDeal />
      </div>

      <div id="foodmenu">
        <FoodMenu />
      </div>

      <div id="blognews">
        <BlogAndNews />
      </div>

      <EnjoyPage />
      <Testimonials />

      {/* Footer ID is important for scroll */}
     <div id="footer">
        <Footer />
      </div> 
    </>
  );
}

export default Home;
