import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"




const Navbar = () => {
    const classLinks  = ({isActive} ) => isActive ?  "underline text-red-500" : "hover:underline";

  return (
    <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
            <div className="">
                <Link to="/" className="text-lg font-bold">
                    e-SHOP
                </Link>
            </div>  
            <div className="mx-4 flex-1 relative">
                <form className="">
                    <input type="text"  placeholder="Search Product" className="border px-4 py-2 w-full"/>
                    <FaSearch className="absolute text-red-500 right-3 top-3"></FaSearch>
                </form>
            </div>
            <div className=" flex items-center space-x-4">
                <Link to="/cart">
                    <FaShoppingCart className="text-lg" />
                </Link>
                <button className="hidden md:block">
                    Login | Register
                </button>
                <button className="block md:hidden">
                    <FaUser />
                </button>

            </div>
        </div>
        <div className=" flex justify-center space-x-10 py-4 font-bold text-sm  ">
                <NavLink to="/" className={classLinks}>HOME</NavLink>
                <NavLink to="/shop" className={classLinks}>SHOP</NavLink>
                <NavLink to="/contact" className={classLinks}>CONTACT</NavLink>
                <NavLink to="/about" className={classLinks}>ABOUT</NavLink>

        </div>
    </nav>

  )
}

export default Navbar
