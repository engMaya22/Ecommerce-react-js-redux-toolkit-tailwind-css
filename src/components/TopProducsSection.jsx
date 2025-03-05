


import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/productSlice'
import { productsInfo } from '../utlis/data';
import { useEffect } from 'react';
import ProductCard from './ProductCard';


const TopProducsSection = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);//key name on store is product
    useEffect(()=>{
      dispatch(setProducts((productsInfo)));
      
    },[dispatch])

  return (
     <div className='container py-12 mx-auto'>
            <h2 className='mb-6 text-2xl font-bold text-center'>Top Products</h2>
            <div className='container grid grid-cols-1 gap-6 cursor-pointer sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
                    {products.slice(0,5).map((el , indx)=><ProductCard key={indx} product={el} />)}

            </div>
     </div>
  )
}

export default TopProducsSection
