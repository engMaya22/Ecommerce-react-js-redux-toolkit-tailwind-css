
import { infoItems } from "../utlis/infoSection";

const InfoSection = () => {
  
 
  return (
            <div className="pt-12 pb-12 bg-white">
                <div className="container grid grid-cols-1 gap-4 mx-auto mt-8 md:grid-cols-2 lg:grid-cols-5">
                    {infoItems.map(item => <div key={item.id}
                                        className="flex flex-col items-center justify-center p-4 bg-white border rounded-lg shadow-md cursor-pointer transation-card">
                                        {item.icon}
                                        <h3 className="mt-4 text-xl font-semibold ">{item.title}</h3>
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
//             <div className="pt-12 pb-8 bg-white">
//                 <div className="container grid grid-cols-1 gap-4 mx-auto mt-8 md:grid-cols-2 lg:grid-cols-5">
//                     {infoItems.map(item => {
//                         const Icon = iconMap[item.iconName];

//                         return <div key={item.id}
//                         className="flex flex-col items-center justify-center p-4 transition-transform duration-300 transform bg-white border rounded-lg shadow-md cursor-pointer // hover:scale-105">
//                         <Icon className="text-3xl text-red-600" />
//                         <h3 className="mt-4 text-xl font-semibold ">{item.title}</h3>
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