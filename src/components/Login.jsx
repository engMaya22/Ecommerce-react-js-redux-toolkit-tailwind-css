

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom"
import * as Yup from "yup"
import { useAuthContext } from "../context/AuthContext";


const Login = ({openSignUp ,setIsModalOpen})=>{
    const navigate = useNavigate();
    const {loginUser} = useAuthContext();


    const initialValues = {
        email: '',
        password: ''
      }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required')
    })
    function handleSubmit(values) {
       loginUser(values)
        setIsModalOpen(false);
        
        navigate('/shop')
      }
      
    return <section className=" bg-indigo-50">
                <div className="container max-w-2xl m-auto">
                <div className="px-6 py-8 m-4 mb-4 bg-white border rounded-md shadow-md md:m-0">
                    <h2 className="mb-6 text-3xl font-semibold text-center">Login</h2>
                    <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    >
                    <Form>
                        <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 font-bold text-gray-700"
                        >
                            Email
                        </label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Enter your email"
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="mt-1 text-sm text-red-500"
                        />
                        </div>

                        <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block mb-2 font-bold text-gray-700"
                        >
                            Password
                        </label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Enter your password"
                        />
                        <ErrorMessage
                            name="password"
                            component="div"
                            className="mt-1 text-sm text-red-500"
                        />
                        </div>

                        <div>
                        <button
                            className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                        </div>
                        
                    <div className="text-center ">
                            <span className="text-gray-700">Don't have an Account?</span>
                            <button className="text-red-800" onClick={openSignUp}>Sign up</button>
                    </div>
                    </Form>
                    </Formik>
                </div>
                </div>
            </section>
         

    

}
export default Login;