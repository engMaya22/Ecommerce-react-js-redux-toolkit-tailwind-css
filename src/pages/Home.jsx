
import React from 'react'
import {categories} from "../utlis/data"
import HeroImage from "../assets/images/hero-page.png"
import { useNavigate } from 'react-router-dom'
import { FaCircle } from 'react-icons/fa'


const Home = () => {
  const navigate = useNavigate();

  return (
   <div className='bg-white mt-2  px-4 md:px-16 lg:px-24'>
       <div className='container flex flex-col md:flex-row mx-auto py-4 space-x-2'>
              <div className='w-full md:w-1/4'>
                    <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>SHOP BY CATEGORIES</div>
                    <ul className='space-y-4 bg-gray-100 p-3 border'>
                      
                      {categories.map(((el)=>  <li className='flex text-sm items-center font-medium '  key={el.id}><div className='w-2 h-2 mr-1 border rounded-full border-red-500 '></div> {el}</li>))}
                    </ul>

                </div>

                <div className='relative w-full md:w-3/4 mt-8 md:mt-0 h-96 '>
                  <img src={HeroImage} alt='hero' className='h-full w-full' />
                  <div className='absolute top-16 left-8 '>
                     <p className='mb-4 text-gray-600'>Meshoko | e-Shop</p>
                     <h2 className='text-3xl font-bold'>Welcome To E-SHOP</h2>
                     <p className='text-gray-800 font-bold mt-2.5 text-xl'> MILLIONS + PRODUCTS</p>
                     <button className='bg-red-600 px-8 py-1.5  text-white mt-4 hover:bg-red-700
                                           transform  transition-transform duration-300 hover:scale-105'
                      onClick={()=>navigate("/shop")}>SHOP NOW</button>
                  </div>
                </div>
              
       </div>
   </div>
  )
}

export default Home
