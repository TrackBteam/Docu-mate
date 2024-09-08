"use client"

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {SignInButton, UserButton} from "@clerk/nextjs"

import { Authenticated, Unauthenticated } from "convex/react";
import { HeaderActions } from "./header-actions";


export function Header(){
  return(
    <div className="bg-slate-900 py-4"> 
    <div className="container mx-auto justify-end space">
    <div className="text-white ">
      Docu-mate
      </div>
      <div className="flex justify-end space-x-4 text-white ">
       
      <ModeToggle/> 
      <HeaderActions/>
      </div>
    </div>
    </div>
  )
}