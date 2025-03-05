import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"




const Footer = () => {
  return (  
    <footer className="px-4 py-8 text-white bg-gray-800 md:px-16 lg:px-14">
            <div className="container grid grid-cols-1 mx-auto md:gap-8 md:grid-cols-3">
                <div>
                      <h3 className="text-xl font-semibold">e-shop</h3>
                      <p className="text-sm"> your one-step fot all your needs . shop with us and experience
                        the best online shopping experiences 
                      </p>

                </div>
                <div className="flex flex-col max-md:mt-4 md:items-center">
                    <h4 className="text-lg font-semibold">Quiks Links</h4>
                     <ul className="mt-4 space-y-4">
                     <li> <Link  to="/" className="hover:underline">Home</Link></li> 
                     <li> <Link to="/shop" className="hover:underline">Shop</Link></li> 
                     <li> <Link to="/contact" className="hover:underline">Contact</Link></li> 
                     <li> <Link to="/about" className="hover:underline">About</Link></li> 

                     </ul>

                  
                </div>
                <div className="space-x-2">
                     <h4 className="text-lg font-semibold">Follow us</h4>
                     <div className="flex mt-8 space-x-4">
                         <a href="" className="hover:text-gray-400"><FaFacebook /></a>
                         <a href="" className="hover:text-gray-400"><FaInstagram /></a>
                         <a href="" className="hover:text-gray-400"><FaTwitter /></a>
                         <a href="" className="hover:text-gray-400"><FaLinkedin /></a>

                     </div>
                     <form className="flex items-center justify-center mt-8"> 
                       <input type="email" placeholder="Enter Email" className="w-full p-2 bg-gray-800 border border-gray-600 rounded-l-lg "/>
                       <button className="px-4 py-2 text-white bg-red-600 rounded-r-lg ">Subscribe</button>

                     </form>
                  
                </div>

            </div>
            <div className="pt-4 mt-8 border-t border-gray-700">
              <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
                <p>&copy; 2024 e-shop All rights reserved .</p>
                <div className="flex mt-4 space-x-4 md:mt-0">
                    <a className="hover:underline">Privacy Policy</a>
                    <a className="hover:underline">Terms & Conditions</a>

                </div>
              </div>
            </div>
    </footer>
  )
}

export default Footer
