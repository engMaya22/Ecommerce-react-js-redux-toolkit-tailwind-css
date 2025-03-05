





import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/productSlice';
import { productsInfo } from '../utlis/data';
import ProductCard from '../components/ProductCard';


const Shop = () => {
  
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);

  useEffect(()=>{
    dispatch(setProducts(productsInfo))//it must be by ai fetch sync thunk
    
  },[])
  
  
  return (
    <div className='container px-4 py-12 mx-auto md:px-16 lg:px-24'>
      <h2 className='mb-6 text-2xl font-bold text-center'>Shop</h2>
      <div className='container grid grid-cols-1 gap-6 cursor-pointer sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
              {products.map((el , indx)=><ProductCard key={indx} product={el} />)}

      </div>
    </div>
  )
}

export default Shop
