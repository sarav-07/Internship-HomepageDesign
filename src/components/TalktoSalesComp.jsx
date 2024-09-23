import React from 'react'
import SalesBg from "../assets/salesbg.svg"

const TalktoSalesComp = () => {
  return (
    <div className='px-10 py-10 rounded-lg'>
        <div className='flex justify-between items-center px-10 py-10 bg-cover bg-center rounded-lg' style={{backgroundImage: `url(${SalesBg})`}}>
        <h1 className='text-orange-700 font-semibold text-lg'>Are you a large business looking for custom solutions?</h1>
        <button className='px-4 py-2 bg-white text-gray-800 font-semibold hover:text-orange-500'>Talk to Sales</button>
    </div>

    </div>  )
}

export default TalktoSalesComp