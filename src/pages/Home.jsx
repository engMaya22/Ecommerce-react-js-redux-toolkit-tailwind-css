
import React from 'react'
import {categories } from "../utlis/data"
import HeroImage from "../assets/images/hero-page.png"
import { useNavigate } from 'react-router-dom'
import { FaCircle } from 'react-icons/fa'
import InfoSection from '../components/InfoSection'
import CategorySection from '../components/CategorySection'
import TopProducsSection from '../components/TopProducsSection'



const Home = () => {
  const navigate = useNavigate();
  
 

  return (
   <div className='px-4 mt-2 bg-white md:px-16 lg:px-24'>
       <div className='container flex flex-col py-4 mx-auto space-x-2 md:flex-row'>
              <div className='w-full md:w-1/4'>
                    <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>SHOP BY CATEGORIES</div>
                    <ul className='p-3 space-y-4 bg-gray-100 border'>
                      
                      {categories.map(((el , idx)=>  <li className='flex items-center text-sm font-medium '  key={idx}><div className='w-2 h-2 mr-1 border border-red-500 rounded-full '></div> {el}</li>))}
                    </ul>

                </div>

                <div className='relative w-full mt-8 md:w-3/4 md:mt-0 h-96 '>
                  <img src={HeroImage} alt='hero' className='w-full h-full' />
                  <div className='absolute top-16 left-8 '>
                     <p className='mb-4 text-gray-600'>Meshoko | e-Shop</p>
                     <h2 className='text-3xl font-bold'>Welcome To E-SHOP</h2>
                     <p className='text-gray-800 font-bold mt-2.5 text-xl'> MILLIONS + PRODUCTS</p>
                     <button className='bg-red-600 px-8 py-1.5  text-white mt-4 hover:bg-red-700
                                           transation-card'
                      onClick={()=>navigate("/shop")}>SHOP NOW</button>
                  </div>
                </div>
       </div>
       <InfoSection />
       <CategorySection />
       <TopProducsSection />

   </div>
  )
}

export default Home
