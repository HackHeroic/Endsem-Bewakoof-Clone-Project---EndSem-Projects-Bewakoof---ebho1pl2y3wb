/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useAuth } from "../contexts/AuthContext";
import { Link,useNavigate } from "react-router-dom"
import { useState } from "react";

export default function LoginPage() {

    const navigate = useNavigate();
    const {isAuthenticated, login, logout } = useAuth();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const handleEmailChange =(event)=>{
        setEmail(event.target.value);
    }

    const handlePasswordChange =(event)=>{
        setPassword(event.target.value);
    }

    const payload = {
        
        email,
        password,
        "appType": "ecommerce"
    }

    const handleLogin = async(e) => {
        e.preventDefault();

        const response = await fetch('https://academics.newtonschool.co/api/v1/user/login',{
            method:"POST",
            headers:{
                "accept": "application/json",
                "projectID": "ebho1pl2y3wb",
                "Content-Type": "application/json"
            },
            body:JSON.stringify(payload),
            
        })

        const data = await response.json();

        if (data.status == "success"){
            login();
            navigate("/")
        }else{
            alert(`${data.message}`)
        }


}


    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
          style={{backgroundColor:'white'}}
        */}
        <div className="login-container w-webkit-fill  justify-center h-screen" 
        style ={{
            backgroundImage:'linear-gradient(0deg,#fff4c4,#fff)'}}  >
            <div className="flex  flex-1 flex-col justify-center px-6 pt-4 pb-11 lg:px-8 bg-white max-w-md w-full mx-auto my-auto">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">


                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Login in to your account
                </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                    </label>
                    <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Email"
                        onChange={handleEmailChange}
                        value={email}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
    
                <div>
                    <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                        </a>
                    </div>
                    </div>
                    <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        value={password}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
    
                <div>
                    <button
                    type="submit"
                    onClick={handleLogin}
                    className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    style={{backgroundColor:'#42a2a2'}}
                    >
                    Login 
                    </button>
                </div>
                </form>
    
                <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{' '}
                
                <Link
                    to = "/signup"
                    className="font-semibold leading-3 text-indigo-600 hover:text-indigo-500">
                        SignUp
                    </Link>
                {/* <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Start a 14 day free trial
                </a> */}
                </p>
            </div>
        
            </div>
     </div>
      </>
    )
}
