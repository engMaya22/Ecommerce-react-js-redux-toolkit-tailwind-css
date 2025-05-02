import { useState } from "react";


const  useContact= ()=> {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message : ""
      });
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    const [errors , setErrors] = useState({
        
    });
    const [ successMessage , setSuccessMessage] = useState("");

    // const [name, setName] = useState("");
    // const [ email , setEmail] = useState("");
    // const [ subject , setSubject] = useState("");
    // const [ message , setMessage] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault()
        // Simple validation
        let validationErrors = {};
        if (!formData.name) validationErrors.name = "Name is required";
        if (!formData.email) validationErrors.email = "Email is required";
        if (!formData.subject) validationErrors.subject = "Subject is required";
        if (!formData.message) validationErrors.message = "Message is required";
        if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        //   console.log(validationErrors)
        return;
        }
        // send email  data of formData
        clearData();
        setSuccessMessage("Your request has been sent successfully !")  
    
    }
    const clearData =()=>{
        setFormData({
            name: "",
            email: "",
            subject: "",
            message : ""
        
        });
        setErrors({
            name: "",
            email: "",
            subject: "",
            message : ""
            
        })
    }
  return {handleChange , handleSubmit , clearData , successMessage , errors , formData}
}
export default useContact;
