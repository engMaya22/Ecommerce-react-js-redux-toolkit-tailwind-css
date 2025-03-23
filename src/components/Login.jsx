



const Login = ({openSignUp})=>{
    return <div>
              <h2 className="mb-4 text-2xl font-bold">Login</h2>
              <form>
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

                  <div className="flex items-center justify-between mb-4">
                      <label htmlFor="" className="inline-flex items-center">
                         <input type="checkbox" className="form-checkbox"/>
                         <span className="ml-2 text-gray-700"> Remember me</span>    
                      </label> 
                      
                      <a href="" className="text-red-800">Forget Password ?</a>
                  </div>
                  <div className="mb-4">
                     <button className="w-full py-2 text-white bg-red-600" type="submit">
                        Login
                     </button>
                  </div>
              </form>
              <div className="text-center ">
                <span className="text-gray-700">Don't have an Account?</span>
                <button className="text-red-800" onClick={openSignUp}>Sign up</button>
              </div>

    </div>

}
export default Login;