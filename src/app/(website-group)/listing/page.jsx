"use client";
import React from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
export default function page() {
  return (
    <>
      <div className="max-w-[1320px] mx-auto mb-6">
         <Breadcrumb className="p-12" aria-label="Default breadcrumb example">
                  <Breadcrumb.Item href="/" icon={HiHome}>
                    Blog
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="#">Listing</Breadcrumb.Item>
                </Breadcrumb>
        <div className="text-center w-full">
          <div className="overflow-x-auto ">
            <table className=" text-sm text-left text-gray-500 w-full border">
              <thead className="text-xs text-gray-700 uppercase bg-gray-300 w-full ">
                <tr className="w-full">
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th colSpan="3" scope="col" className="px-6 py-3">
                    Discription
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border"
                  >
                    programming language
                  </th>
                  <td colSpan="2" className="px-6 py-4 border">
                    "Whether HTML is or is not technically a “programming”
                    language is an ongoing debate among web developers and
                    experts. While the majority defines HTML as a “markup”
                    language (not a programming language) some argue the two
                    aren’t mutually exclusive."
                    https://blog.hubspot.com/website/html
                  </td>
                  <td className="text-center px-4 ">
                    <button className="border rounded-lg py-2 px-6 hover:text-blue-600 hover:bg-slate-100">
                      edit
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border"
                  >
                    programming language
                  </th>
                  <td colSpan="2" className="px-6 py-4 border">
                    "Whether HTML is or is not technically a “programming”
                    language is an ongoing debate among web developers and
                    experts. While the majority defines HTML as a “markup”
                    language (not a programming language) some argue the two
                    aren’t mutually exclusive."
                    https://blog.hubspot.com/website/html
                  </td>
                  <td className="text-center px-4 ">
                    <button className="border rounded-lg py-2 px-6 hover:text-blue-600 hover:bg-slate-100">
                      edit
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border"
                  >
                    programming language
                  </th>
                  <td colSpan="2" className="px-6 py-4 border">
                    "Whether HTML is or is not technically a “programming”
                    language is an ongoing debate among web developers and
                    experts. While the majority defines HTML as a “markup”
                    language (not a programming language) some argue the two
                    aren’t mutually exclusive."
                    https://blog.hubspot.com/website/html
                  </td>
                  <td className="text-center px-4 ">
                    <button className="border rounded-lg py-2 px-6 hover:text-blue-600 hover:bg-slate-100">
                      edit
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border"
                  >
                    programming language
                  </th>
                  <td colSpan="2" className="px-6 py-4 border">
                    "Whether HTML is or is not technically a “programming”
                    language is an ongoing debate among web developers and
                    experts. While the majority defines HTML as a “markup”
                    language (not a programming language) some argue the two
                    aren’t mutually exclusive."
                    https://blog.hubspot.com/website/html
                  </td>
                  <td className="text-center px-4 ">
                    <button className="border rounded-lg py-2 px-6 hover:text-blue-600 hover:bg-slate-100">
                      edit
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border"
                  >
                    programming language
                  </th>
                  <td colSpan="2" className="px-6 py-4 border">
                    "Whether HTML is or is not technically a “programming”
                    language is an ongoing debate among web developers and
                    experts. While the majority defines HTML as a “markup”
                    language (not a programming language) some argue the two
                    aren’t mutually exclusive."
                    https://blog.hubspot.com/website/html
                  </td>
                  <td className="text-center px-4 ">
                    <button className="border rounded-lg py-2 px-6 hover:text-blue-600 hover:bg-slate-100">
                      edit
                    </button>
                  </td>
                </tr>
                <tr className="bg-white border">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border"
                  >
                    programming language
                  </th>
                  <td colSpan="2" className="px-6 py-4 border">
                    "Whether HTML is or is not technically a “programming”
                    language is an ongoing debate among web developers and
                    experts. While the majority defines HTML as a “markup”
                    language (not a programming language) some argue the two
                    aren’t mutually exclusive."
                    https://blog.hubspot.com/website/html
                  </td>
                  <td className="text-center px-4 ">
                    <button className="border rounded-lg py-2 px-6 hover:text-blue-600 hover:bg-slate-100">
                      edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
