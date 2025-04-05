

import { useNavigate } from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
// import { useAuthContext } from "../context/AuthContext";


const Register = ({openLogin , setIsModalOpen}) => {
  const navigate = useNavigate();
  // const {registerUser} = useAuthContext();

  const RegisterSchema = Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
          .email("Invalid email address format")
          .required("Email is required"),
      password: Yup.string()
          .min(3, "Password must be 3 characters at minimum")
          .required("Password is required"),
  });

  const submitHandler = (values, { setSubmitting }) => {
      // registerUser(values);
      setIsModalOpen(false)
      navigate('/shop');
      setSubmitting(false);
  };
  return(   <section className="bg-indigo-50">
              <div className="container max-w-2xl m-auto">
                  <div className="px-6 py-8 m-4 mb-4 bg-white border rounded-md shadow-md md:m-0">
                      <h2 className="mb-6 text-3xl font-semibold text-center">Register</h2>
                      <Formik
                          initialValues={{
                              name: "",
                              email: "",
                              password: "",
                          }}
                          validationSchema={RegisterSchema}
                          onSubmit={submitHandler}
                      >
                          {({ isSubmitting }) => (
                              <Form>
                                  <div className="mb-4">
                                      <label htmlFor="name" className="block mb-2 font-bold text-gray-700">
                                          Your Name
                                      </label>
                                      <Field
                                          type="text"
                                          id="name"
                                          name="name"
                                          className="w-full px-3 py-2 border rounded"
                                          placeholder="Enter your name"
                                      />
                                      <ErrorMessage name="name" component="div" className="text-sm text-red-500" />
                                  </div>

                                  <div className="mb-4">
                                      <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
                                          Email
                                      </label>
                                      <Field
                                          type="email"
                                          id="email"
                                          name="email"
                                          className="w-full px-3 py-2 border rounded"
                                          placeholder="Enter your email"
                                      />
                                      <ErrorMessage name="email" component="div" className="text-sm text-red-500" />
                                  </div>

                                  <div className="mb-4">
                                      <label htmlFor="password" className="block mb-2 font-bold text-gray-700">
                                          Password
                                      </label>
                                      <Field
                                          type="password"
                                          id="password"
                                          name="password"
                                          className="w-full px-3 py-2 border rounded"
                                          placeholder="Enter your password"
                                      />
                                      <ErrorMessage name="password" component="div" className="text-sm text-red-500" />
                                  </div>

                                  <div>
                                      <button
                                          type="submit"
                                          className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                                          disabled={isSubmitting}
                                      >
                                          {isSubmitting ? "Submitting..." : "Submit"}
                                      </button>
                                  </div>
                                  <div className="text-center ">
                                    <span className="text-gray-700">Already have an Account?</span>
                                    <button className="text-red-800" onClick={openLogin}>Login</button>
                                  </div> 
                              </Form>
                          )}
                      </Formik>
                  </div>
              </div>
            </section>
  )

  
 
}
export default Register
