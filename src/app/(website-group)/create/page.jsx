"use client";
import React from "react";
import { Breadcrumb } from "flowbite-react";
import { ToastContainer, toast } from 'react-toastify';
import { HiHome } from "react-icons/hi";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "@/app/config/firebaseConfig";
export default function page() {

  let blogId= Date.now()
  const db = getDatabase(app);
  let saveBlog = (event) => {
    event.preventDefault();
let heading=event.target.heading.value
let discription=event.target.discription.value

let obj={heading,discription}

set(ref(db, "blogs/"+blogId),obj)
event.target.reset();

toast.success("blog item sucessfulu added")

  };
  return (
    <div className="bg-[#e6e6e6] pb-3 ">
      <ToastContainer />
      <div className=" max-w-[1370px] mx-auto">
        <Breadcrumb className="p-12" aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="/" icon={HiHome}>
            Blog
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Create</Breadcrumb.Item>
        </Breadcrumb>
        <form
          onSubmit={saveBlog}
          className=" shadow-xl rounded-lg pt-8 bg-white mb-7"
        >
          <div className="w-[98%] mx-auto ">
            <label className="text-[22px] font-bold px-2 mt-[25px] ">
              Heading
            </label>
            <input
              name="heading"
              className="w-full px-4 rounded-lg h-[50px] bg-[#f9fafb] mt-6"
              type="text"
              placeholder="Write your Thought..."
            />
          </div>
          <h1 className="py-8 px-3 font-bold text-[22px]">Discription</h1>
          <div className="w-[98%] mx-auto">
            <textarea
              rows="10"
              name="discription"
              placeholder="Write your Thought..."
              className="w-full rounded-lg block min-h[300px]"
            ></textarea>
          </div>
          <div className="mt-[40px] flex justify-center">
            <button className=" py-1 px-[130px] bg-violet-800 text-[25px] font-medium rounded-lg text-white hover:bg-orange-500">
              {" "}
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
