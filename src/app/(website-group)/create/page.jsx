"use client";
import React from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
export default function page() {
  return (
    <div className="bg-[#e6e6e6] pb-3 ">
      <div className=" max-w-[1370px] mx-auto">
        <Breadcrumb className="p-12" aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="/" icon={HiHome}>
            Blog
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Create</Breadcrumb.Item>
        </Breadcrumb>
        <div className=" shadow-xl rounded-lg pb-8 bg-white mb-7">
          <h1 className="py-8 px-3 font-bold text-[22px]">Heading</h1>
          <div className="w-[98%] mx-auto">
            <input
              className="w-full px-4 rounded-lg h-[50px] bg-[#f9fafb]"
              type="text"
              placeholder="Write your Thought..."
            />
          </div>
          <h1 className="py-8 px-3 font-bold text-[22px]">Discription</h1>
          <div className="w-[98%] mx-auto">
            <textarea
              rows="10"
              name="desciption"
              placeholder="Write your Thought..."
              className="w-full rounded-lg block min-h[300px]"
            ></textarea>
          </div>
          <div className="mt-[40px] flex justify-center">
            <button className=" py-1 px-[130px] bg-violet-800 text-[25px] font-medium rounded-lg text-white hover:bg-orange-500"> Add Blog</button>
          </div>
        </div>
      </div>
    </div>
  );
}
