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

import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom"

export default function SignUpPage() {
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleNameChange =(event)=>{
        setName(event.target.value);
    }

    const handleEmailChange =(event)=>{
        setEmail(event.target.value);
    }

    const handlePasswordChange =(event)=>{
        setPassword(event.target.value);
    }

    const handleSignUp = async(e) =>{
        e.preventDefault();

        const payload = {
            name,
            email,
            password,
            "appType": "ecommerce"
        }

        const response = await fetch('https://academics.newtonschool.co/api/v1/user/signup',{
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
            navigate("/login");
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
                Create account
                </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Your name
                    </label>
                    <div className="mt-2">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="First and last name"
                        onChange={handleNameChange}
                        value={name}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
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
                        placeholder="Enter Your Email"
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
                    </div>
                    <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="At least 6 characters"
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
                    onClick={handleSignUp}
                    className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    style={{backgroundColor:'#42a2a2'}}
                    >
                    Create your Bewakoof account 
                    </button>
                </div>
                </form>
    
                <p className="mt-10 text-center text-sm text-gray-500">
                Already have an account?{' '}
                
                <Link
                    to = "/login"
                    className="font-semibold leading-3 text-indigo-600 hover:text-indigo-500">
                        Login
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
  