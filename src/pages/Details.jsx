import { useEffect, useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"







const Details = () => {

    const {id} = useParams();//return string id
    const products = useSelector(state => state.product.products); //here is empty   

    const [product , setProduct] = useState(null);


    useEffect(()=>{

        const foundProduct = products.find((p) => p.id === parseInt(id)); // Ensure type match
        setProduct(foundProduct);


    },[id , products])

    

    // if(!product)return <div>Loading ...</div>

    
  return (
    <div className="container px-4 py-8 mx-auto md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row gap-x-16"> 
            <div className="flex justify-center py-4 shadow-md md:w-1/2 md:px-8 h-96">
               <img src={product.image}  className="h-full" alt={product.name} />
                
            </div>

            <div className="flex flex-col items-center p-4 shadow-md md:w-1/2 md:p-16 gap-y-2">
               <h2 className="mb-2 text-3xl font-semibold">{product.name}</h2>
               <p className="mb-4 text-xl font-semibold text-gray-800">
                {product.price}
               </p>
                
            </div>

            <div className="flex items-center mb-4 gap-x-2">
                 <input type="number" className="w-16 p-1 border"/>
                  <button className="text-white bg-red-600 py-1.5 px-4 hover:bg-red-800">
                    Add to cart
                  </button>
                
            </div>
            <div >
                <p className="flex items-center ">
                    <FaCarSide className="mr-1" />
                    Delivery & return
                </p>
                <p className="flex items-center ">
                    <FaQuestion className="mr-1" />
                    Ask  a Question ? 
                    
                </p>
                
            </div>
            
        </div>
      
    </div>
  )
}

export default Details
