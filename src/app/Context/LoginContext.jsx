"use client";
import React, { createContext, useEffect, useState } from 'react'
export let createLogin=createContext()
export default function LoginContext({children}) {

    let [logIn,setLogIn]=useState(JSON.parse( localStorage.getItem("USER")) ?? null )


    useEffect(()=>{
        localStorage.setItem("USER",JSON.stringify(logIn))
    },[logIn])

    let obj={logIn,setLogIn}

  return (
    <createLogin.Provider value={obj}>
      {children}
    </createLogin.Provider>
  )
}
