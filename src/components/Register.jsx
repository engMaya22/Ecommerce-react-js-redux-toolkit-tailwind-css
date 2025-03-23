



const Register = ({openLogin}) => {
  return ( <div>
              <h2 className="mb-4 text-2xl font-bold">Sign up</h2>
              <form>
                <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700">
                          Name
                      </label> 
                      <input type="text" placeholder="Enter Name" name="name" className="w-full px-3 py-2 border"/>
                  </div>
                  <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700">
                          Email
                      </label> 
                      <input type="email" placeholder="Enter Email" name="email" className="w-full px-3 py-2 border"/>
                  </div>
                  <div className="mb-4">
                      <label htmlFor="password"  className="block text-gray-700">
                          Password
                      </label> 
                      <input placeholder="Enter Password" type="password" name="password" className="w-full px-3 py-2 border"/>
                  </div>

                  <div className="mb-4">
                     <button className="w-full py-2 text-white bg-red-600" type="submit">
                        Login
                     </button>
                  </div>
              </form>
              <div className="text-center ">
                <span className="text-gray-700">Already have an Account?</span>
                <button className="text-red-800" onClick={openLogin}>Login</button>
              </div>

    </div>
  )
}

export default Register
