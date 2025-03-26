import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom"
import Login from "./Login";
import Register from "./Register";
import Modal from "./Modal";
import { setSearchTerm } from "../redux/productSlice";




const Navbar = () => {
    const classLinks  = ({isActive} ) => isActive ?  "underline text-red-500" : "hover:underline";
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const [isLogin , setIsLogin] = useState(true);
    const [isModalOpen , setIsModalOpen] = useState(false);
    const [searchKey , setSearchKey] = useState('');

    
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const openAuthHandle =()=>{
        setIsLogin(state => !state)
        setIsModalOpen(true)
    }
    // const openLogin =()=>{
    //     setIsLogin(true)
    //     setIsModalOpen(true)
    // }
    const handleSearch=(e)=>{
        e.preventDefault();
        dispatch(setSearchTerm(searchKey));
        navigate('/shop')
        
    }


  return (
    <nav className="bg-white shadow-md">
        <div className="container flex items-center justify-between px-4 py-4 mx-auto md:px-16 lg:px-24">
            <div className="">
                <Link to="/" className="text-lg font-bold">
                    e-SHOP
                </Link>
            </div>  
            <div className="relative flex-1 mx-4">
                <form className="" onSubmit={handleSearch}>
                    <input onChange={(e)=>setSearchKey(e.target.value)} type="text"  placeholder="Search Product" className="w-full px-4 py-2 border"/>
                    <FaSearch className="absolute text-red-500 right-3 top-3"></FaSearch>
                </form>
            </div>
            <div className="flex items-center space-x-4 ">
                <Link to="/cart" className="relative">
                    <FaShoppingCart className="text-lg" />
                    {totalQuantity > 0 && <span className="absolute top-0 flex items-center justify-center w-3 text-xs text-white bg-red-600 rounded-full left-3">{totalQuantity}</span>}
                </Link>
                <button className="hidden md:block" onClick={()=>setIsModalOpen(true)}>
                    Login | Register
                </button>
                <button className="block md:hidden">
                    <FaUser />
                </button>

            </div>
        </div>
        <div className="flex justify-center py-4 space-x-10 text-sm font-bold ">
                <NavLink to="/" className={classLinks}>HOME</NavLink>
                <NavLink to="/shop" className={classLinks}>SHOP</NavLink>
                <NavLink to="/contact" className={classLinks}>CONTACT</NavLink>
                <NavLink to="/about" className={classLinks}>ABOUT</NavLink>

        </div>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>{isLogin ? <Login openSignUp={openAuthHandle}/> : <Register openLogin={openAuthHandle} /> }</Modal>
    </nav>

  )
}

export default Navbar
