"use client";
import React, { useEffect, useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "@/app/config/firebaseConfig";
export default function page() {
  let [formData, setFormData] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const blogRef = ref(db, "blogs/");
    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);

      let finalFomdata = [];

      for (let key in data) {
        finalFomdata.push(data[key]);
        setFormData(finalFomdata);
      }
    });
  }, []);

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
    {formData.length>=1?
    formData.map((items,index)=>{
      return(
<FormItemsBody  items={items} key={index}  />
      )
    })
  :
  "nodata found"
  
  }
      
    
    



</table>
           

          </div>
        </div>
      </div>
    </>
  );
}

function FormItemsBody({items}){
return(
  <tbody>
  <tr className="bg-white border">
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border"
    >
      {items.heading}
    </th>
    <td colSpan="2" className="px-6 py-4 border">
     {items.discription}
    </td>
    <td className="text-center px-4 ">
      <button className="border rounded-lg py-2 px-6 hover:text-blue-600 hover:bg-slate-100">
        edit
      </button>
    </td>
  </tr>
</tbody>
)



}