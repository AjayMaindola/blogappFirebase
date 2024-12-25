"use client";

import Link from "next/link";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from 'react'

export default function Header() {
  return (
    <div className=" shadow-xl">
      <Navbar fluid rounded>
      <Navbar.Brand href="/admin-panel">
        
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">DashBoard</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Ajay Maindola</span>
            
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        {/* <Navbar.Toggle /> */}
      </div>
      {/* <Navbar.Collapse>
        
        navbar colapes item 
      </Navbar.Collapse> */}
    </Navbar>
    </div>
  )
}
