import { signOut } from '@/app/auth'
import { redirect } from 'next/navigation';
import React from 'react'

function LogOut() {
  const handlesignout=async()=>{
    "use server"
    signOut();
    redirect("/login")
  }
  return (
    <div>
       <div className='w-[16rem] md:max-w-xs mt-56 h-[200px] bg-green-100 mx-auto flex items-center justify-center rounded-md shadow-md'>
            <form action={handlesignout} >
                <fieldset className='flex flex-col gap-y-2 items-center justify-center'>
                  <p className='text-xl text-green-800 font-bold'>Sign Out</p>
                    <p className='text-base text-green-800 font-bold'>Are you sure to Signout ?</p>
                    <button type="submit" className=" w-2/3 bg-green-800 rounded-md py-1 text-green-50">Sign Out</button>
                </fieldset>
            </form>
    </div>
    </div>
  )
}

export default LogOut