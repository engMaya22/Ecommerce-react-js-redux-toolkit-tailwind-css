import { useEffect, useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct || null);
  }, [id, products]);

  if (!product) return <div className="py-10 text-lg font-semibold text-center">Loading...</div>;

  return (
    <div className="container px-6 py-12 mx-auto md:px-16 lg:px-24">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        
        {/* Product Image */}
        <div className="flex items-center justify-center p-6 overflow-hidden bg-white rounded-lg shadow-lg">
          <img src={product.image} alt={product.name} className="object-contain h-96" />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-lg">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">{product.name}</h2>
            <p className="mt-2 text-xl font-semibold text-red-600">${product.price}</p>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center mt-6 gap-x-4">
              <input
                type="number"
                className="w-20 p-2 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                min="1"
                defaultValue="1"
              />
              <button className="px-6 py-2 font-semibold text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-800">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 space-y-3 text-gray-700">
            <p className="flex items-center gap-x-2">
              <FaCarSide className="text-lg text-red-500" />
              <span>Delivery & Return</span>
            </p>
            <p className="flex items-center gap-x-2">
              <FaQuestion className="text-lg text-red-500" />
              <span>Ask a Question?</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Details;
