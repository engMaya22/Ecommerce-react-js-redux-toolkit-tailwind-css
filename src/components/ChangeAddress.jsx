import { useState } from "react"


const ChangeAddress = ({setIsModalOpen , setAddress}) => {
    const [newAddress , setNewAddress] = useState("");
    const onClose = ()=>{
        setAddress(newAddress);
        setIsModalOpen(false)
        
    }
  return (
    <div>
         <input type="text"
                 placeholder="Enter new address" 
                 className="w-full p-2 mb-4 border"
                 onChange={(e)=>(setNewAddress(e.target.value))}/>
         <div className="flex justify-end">
            <button className="px-4 py-2 mr-2 text-white bg-gray-500 rounded" onClick={()=>setIsModalOpen(false)}>Cancel</button>
            <button className="px-4 py-2 text-white bg-blue-500 rounded" onClick={onClose}>Save Address</button>
         </div>
    </div>
  )
}

export default ChangeAddress
