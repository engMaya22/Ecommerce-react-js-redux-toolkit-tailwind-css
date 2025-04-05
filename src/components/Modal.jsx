import { cloneElement } from "react"


const Modal = ({isModalOpen , setIsModalOpen , children}) => {
   
  if(!isModalOpen)return null

  
  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <button className="absolute text-2xl text-gray-600 -top-2 right-1 " onClick={()=>setIsModalOpen(false)}>&times;</button>
                {/* Clone the child and pass setIsModalOpen */}

                {children}
                 {/* {cloneElement(children, { setIsModalOpen })} */}
        </div>
      
    </div>
  )
}

export default Modal
