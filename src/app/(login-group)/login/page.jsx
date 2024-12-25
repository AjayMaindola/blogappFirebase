"use client";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import React, { createContext, useContext, useEffect } from "react";
import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { app } from "@/app/config/firebaseConfig";
import { createLogin } from "@/app/Context/LoginContext";
import { redirect } from "next/navigation";
export default function Login() {

let{logIn,setLogIn}=useContext(createLogin)

  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  let googleLogin=()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
           const credential = GoogleAuthProvider.credentialFromResult(result);
           const token = credential.accessToken;
           const user = result.user;
           setLogIn(user);
           console.log(token);
         })
         .catch((error) => {
          

        });
  }
useEffect(()=>{

if(logIn){
  redirect("/")
}

})

  return (
    <>
      <div className="max-w-[1320px] mx-auto px-[70px] pb-5 mt-4">
        <Breadcrumb aria-label="Default breadcrumb example ">
          <Breadcrumb.Item href="/" icon={HiHome}>
            Blog
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/login">Login</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="max-w-[1320px] mx-auto flex justify-center ">
        <div className="container mx-auto p-8 flex">
          <div className="max-w-md w-full mx-auto">
            <h1 className="text-4xl text-center mb-12 font-thin">LogIn</h1>

            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="p-8">
                <htmlForm
                  method="POST"
                  className=""
                  action="#"
                  onSubmit="return false"
                >
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Email
                    </label>

                    <input
                      type="text"
                      name="email"
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Password
                    </label>

                    <input
                      type="text"
                      name="password"
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                    />
                  </div>

                  <button className="w-full  p-3 mt-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded shadow">
                    Login
                  </button>
                  <h1 className="text-center mt-3">Or</h1>
                  <button onClick={googleLogin} className="w-full  p-3 mt-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded shadow flex items-center md:gap-10 gap-3">
                  <FcGoogle className="md:text-[30px] text-[25px] md:ml-8 animate-bounce" />
                     Continue with Google
                  </button>
                </htmlForm>
              </div>
              <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                <a href="#" className="font-medium text-indigo-500">
                  Create account
                </a>

                <a href="#" className="text-gray-600">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
