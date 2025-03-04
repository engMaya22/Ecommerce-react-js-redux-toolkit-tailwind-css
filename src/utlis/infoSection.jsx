// Imports
import { FaHeadset, FaLock, FaShippingFast, FaTag } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa6";

// Data with JSX components directly
export const infoItems = [
  {
    icon: <FaShippingFast className="text-3xl text-red-600" />,
    title: "Free Shipping",
    description: "Get your orders delivered with no extra cost",
  },
  {
    icon: <FaHeadset className="text-3xl text-red-600" />,
    title: "Support 24/7",
    description: "We are here to assist you anytime",
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
    title: "100% Money Back",
    description: "Full refund if you are not satisfied",
  },
  {
    icon: <FaLock className="text-3xl text-red-600" />,
    title: "Payment Secure",
    description: "Your payment information is safe with us",
  },
  {
    icon: <FaTag className="text-3xl text-red-600" />,
    title: "Discount",
    description: "Enjoy the best prices on our products",
  },
];
