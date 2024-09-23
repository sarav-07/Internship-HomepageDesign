import React from 'react'
import "../index.css"
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import BenefitSection from '../components/BenefitSection'
import ProductSection from '../components/ProductSection'
import ConnectStore from '../components/ConnectStore'
import TalktoSalesComp from '../components/TalktoSalesComp'
import CustomerRating from '../components/CustomerRating'
import SellingCard from '../components/SellingCard'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <BenefitSection/>
        <ProductSection/>
        <ConnectStore/>
        <TalktoSalesComp/>
        <CustomerRating/>
        <SellingCard/>
        <Footer/>
    </div>
  )
}

export default Home