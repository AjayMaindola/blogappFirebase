"use client";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";



export default function Home() {
  return (
    <>
      <div className="max-w-[1320px] mx-auto px-[70px] pb-5 mt-4">
        <Breadcrumb aria-label="Default breadcrumb example ">
          <Breadcrumb.Item href="/" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/admin-panel">Login</Breadcrumb.Item>

        </Breadcrumb>
      </div>

      <div className="max-w-[1320px] mx-auto flex justify-center " >

        <div className="container mx-auto p-8 flex">
          <div className="max-w-md w-full mx-auto">
            <h1 className="text-4xl text-center mb-12 font-thin">LogIn</h1>

            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="p-8">
                <htmlForm method="POST" className="" action="#" onSubmit="return false">
                  <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>

                    <input type="text" name="email" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>

                    <input type="text" name="password" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                  </div>

                  <button className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">Login</button>
                </htmlForm>
              </div>

              <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                <a href="#" className="font-medium text-indigo-500">Create account</a>

                <a href="#" className="text-gray-600">htmlForgot password?</a>
              </div>
            </div>
          </div>
        </div>



      </div>
    </>





  );
}
