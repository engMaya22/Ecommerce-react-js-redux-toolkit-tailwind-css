


import { useDispatch, useSelector } from 'react-redux'
import { setFeaturedProducts } from '../redux/productSlice'
import { featuredProductsInfo } from '../utlis/data';
import { useEffect } from 'react';
import ProductCard from './ProductCard';


const FeaturedProdutcsSection = () => {

    const dispatch = useDispatch();
    const featuredProducts = useSelector(state => state.product.featuredProducts);//key name on store is product
    useEffect(()=>{
      dispatch(setFeaturedProducts((featuredProductsInfo)));
      
    },[dispatch])

  return (
     <div className='container py-12 mx-auto'>
            <h2 className='mb-6 text-2xl font-bold text-center'>Featured Products</h2>
            <div className='container grid grid-cols-1 gap-6 cursor-pointer sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
                    {featuredProducts.map((el , indx)=><ProductCard key={indx} product={el} />)}

            </div>
     </div>
  )
}

export default FeaturedProdutcsSection
