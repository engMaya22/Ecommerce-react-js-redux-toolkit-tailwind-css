
import { infoItems } from "../utlis/infoSection";

const InfoSection = () => {
  
 
  return (
            <div className="bg-white pb-8 pt-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4  mt-8">
                    {infoItems.map(item => <div key={item.id}
                                        className="flex flex-col bg-white shadow-md p-4 border rounded-lg justify-center items-center
                                        transform  transition-transform duration-300 hover:scale-105 cursor-pointer">
                                        {item.icon}
                                        <h3 className="mt-4 font-semibold text-xl ">{item.title}</h3>
                                        <p className="mt-4 text-gray-600">{item.description}</p>
    
                                        </div> 

                    
                                    )}
                </div>
            </div>
  )
}

export default InfoSection


// const InfoSection = () => {
//     const iconMap = {
//         FaShippingFast,
//         FaHeadset,
//         FaMoneyBillWave,
//         FaLock,
//         FaTag,
//       };
    
 
//   return (
//             <div className="bg-white pb-8 pt-12">
//                 <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4  mt-8">
//                     {infoItems.map(item => {
//                         const Icon = iconMap[item.iconName];

//                         return <div key={item.id}
//                         className="flex flex-col bg-white shadow-md p-4 border rounded-lg justify-center items-center
//                         transform  transition-transform duration-300 hover:scale-105 cursor-pointer">
//                         <Icon className="text-3xl text-red-600" />
//                         <h3 className="mt-4 font-semibold text-xl ">{item.title}</h3>
//                         <p className="mt-4 text-gray-600">{item.description}</p>
    
//                     </div> 

//                     }
//                                     )}
//                 </div>
//             </div>
//   )
// }
// "FaShippingFast" is just a string, not the actual 
// component. React doesn't know how to turn a string "FaShippingFast" into <FaShippingFast />.
//JSX <Component /> needs a real React component, not a string.
// That's why we do the lookup with iconMap[item.iconName].