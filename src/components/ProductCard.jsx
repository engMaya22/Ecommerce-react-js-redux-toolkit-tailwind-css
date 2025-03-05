import { FaStar } from "react-icons/fa"





const ProductCard = ({product}) => {
  return (
         <div className="relative p-4 bg-white border rounded shadow transation-card">
            <img src={product.image} alt={product.name} className="object-contain w-full h-48 mx-auto mb-4"/>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">${product.price}</p>
            <div className="flex items-center mt-2"> 
            {[...Array(5)].map((_, index) => (
               <FaStar key={index} className={index < product.rate ? "text-yellow-500" : "text-gray-300"} />
            ))}
            </div>
            <div className="absolute flex items-center justify-center w-8 h-8 text-sm text-white transition-all duration-300 bg-red-600 rounded-full bottom-4 right-2 group hover:w-32 hover:bg-red-700">
                <span className="group-hover:hidden">+</span>
                <span className="hidden group-hover:block">Add to cart</span>
            </div>
         </div>
      
  )
}

export default ProductCard
