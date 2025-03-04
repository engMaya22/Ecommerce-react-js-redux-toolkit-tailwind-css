

import { categoriesInfo } from "../utlis/data"

const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {
           categoriesInfo.map((category , indx) => <div className="relative h-64 
                                                     transation-card cursor-pointer" key={indx}>
                                                        <img src={category.image} className="w-full h-full object-cover rounded-lg shadow-md" />
                                                        <div className="absolute top-20 left-12
                                                        ">
                                                        <p className="text-xl font-bold">{category.title}</p>
                                                        <p className="text-gray-600">View All</p>

                                                </div>
                                           </div>
            )}
      
    </div>
  )
}

export default CategorySection
