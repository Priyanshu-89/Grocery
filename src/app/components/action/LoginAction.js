"use server"
import { signIn } from "@/app/auth"

export async function LoginAction(formData){
 // console.log("LoginAction : ",formData)
  
  await signIn("credentials",
        {username:formData.username,password:formData.password,role:formData.role, redirectTo:"/"}
  )
  //  try{
  //     await signIn("credentails",{
  //     username:formData.username,
  //     password:formData.password,
  //     redirectTo:"/",
  //   })
  //  }catch(error)
  //  {
  //   console.log(error)
  //  }
  
}