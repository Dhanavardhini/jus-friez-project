import React from 'react'
import Navbar from '../components/Navbar'
import HomePage from '../Page/HomePage'
import BestDeal from './BestDeal'
import FoodMenu from './FoodMenu'
import BlogAndNews from './BlogAndNews'

function Home() {
  return (
    <>
     <Navbar/>
     <HomePage/>
     <BestDeal/>
     <FoodMenu/>
     <BlogAndNews/>
    </>
  )
}

export default Home
