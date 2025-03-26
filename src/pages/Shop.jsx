import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/productSlice';
import { productsInfo } from '../utlis/data';
import ProductCard from '../components/ProductCard';
import NoProducts from "../assets/images/not_found.png"


const Shop = () => {
  const dispatch = useDispatch();
  const { products, searchTerm } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(setProducts(productsInfo));
  }, [dispatch]);

  // Filter products whenever searchTerm changes
  const displayedProducts = searchTerm
    ? products.filter(prod => prod.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : products;

  return (
    <div className='container px-4 py-12 mx-auto md:px-16 lg:px-24'>
    {
      displayedProducts.length > 0 ? 
                              <>
                                  <h2 className='mb-6 text-2xl font-bold text-center'>Shop</h2>
                                    <div className='container grid grid-cols-1 gap-6 cursor-pointer sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
                                      {displayedProducts.map((el) => (
                                        <ProductCard key={el.id} product={el} />
                                      ))}
                                  </div>
                              </>
                              :
                              <div className='flex justify-center'>
                                <img src={NoProducts}  />
                                
                              </div>
    }
    </div>
  );
};

export default Shop;
