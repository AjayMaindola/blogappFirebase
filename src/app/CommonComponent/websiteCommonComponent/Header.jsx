"use client";

import Link from "next/link";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { createLogin } from "@/app/Context/LoginContext";

export default function Header() {
  let { logIn, setLogIn } = useContext(createLogin);

  console.log(logIn);

  return (
    <div className=" fixed md:sticky top-0 bg-[url('/WebsiteImage/Header/HeaderBg.jpg')] bg-cover w-[100%]  ">
      <Navbar className=" mx-auto max-w-[1320px] bg-inherit  ">
        <Navbar.Brand as={Link} href="/">
          <h1 className="text-[25px] font-bold text-green-500">
            Blog<span className="text-white">-</span>
            <span className="text-red-600">st</span>
          </h1>
        </Navbar.Brand>

        <div className="md:flex items-center gap-3 ">
          <Navbar.Collapse className="  absolute left-0 top-[60px]  md:static ">
            <Navbar.Link
              as={Link}
              href="/"
              className=" text-white font-bold  hover:bg-red-400"
            >
              Blog
            </Navbar.Link>
            <Navbar.Link
              as={Link}
              href="/create"
              className=" text-white font-bold  hover:bg-red-400"
            >
              Create
            </Navbar.Link>
            <Navbar.Link
              as={Link}
              href="/listing"
              className="text-white font-bold  hover:bg-red-400"
            >
              Listing
            </Navbar.Link>
            {logIn ? (
              <li
                onClick={() => setLogIn(null)}
                className="text-white font-bold cursor-pointer "
              >
                LogOut{" "}
              </li>
            ) : (
              <li className="text-white font-bold ">
                <Link href="/login">LogIn</Link>{" "}
              </li>
            )}
          </Navbar.Collapse>
          <div className="md:hidden ">
            <Dropdown
              className=" w-[100%] mt-[1px] h-[100vh] p-0  "
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <div className="  ">
              <Dropdown.Item className="text-red-600 pl-[40px]">
                {" "}
                <li className=" font-bold ">
                  <Link href="/">Blog</Link>{" "}
                </li>
              </Dropdown.Item>
              <Dropdown.Item className="text-red-600 pl-[40px]">
                {" "}
                <li className=" font-bold ">
                  <Link href="/create">Create</Link>{" "}
                </li>
              </Dropdown.Item>
              <Dropdown.Item className="text-red-600 pl-[40px]">
                {" "}
                <li className=" font-bold ">
                  <Link href="/listing">Listing</Link>{" "}
                </li>
              </Dropdown.Item>
              <Dropdown.Item className="text-red-600 pl-[40px]">
                {" "}
                <li className=" font-bold ">
                  <Link href="#">Dashboard</Link>{" "}
                </li>
              </Dropdown.Item>
              <Dropdown.Item className="text-red-600 pl-[40px] ">
                {" "}
                <li className=" font-bold ">
                  <Link href="#">Settings</Link>{" "}
                </li>
              </Dropdown.Item>
              <Dropdown.Item className="mb-4 text-red-600 pl-[40px]">
                {logIn ? (
                  <li
                    onClick={() => setLogIn(null)}
                    className=" font-bold cursor-pointer  "
                  >
                    Sign out{" "}
                  </li>
                ) : (
                  <li className=" font-bold  ">
                    <Link href="/login">LogIn</Link>{" "}
                  </li>
                )}
              </Dropdown.Item>
              </div>
            
            </Dropdown>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
