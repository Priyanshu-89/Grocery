
import { redirect } from "next/navigation";
import SellPageItems from "./(pages)/sellpage/page";
import {auth} from "./auth"



const App  =async () => {
 const session=await auth();
 console.log("Your Session", session)
 if(!session)
 redirect("/api/auth/signin")

  return (
    <>
  <div className="max-w-3xl mt-4 text-xl text-green-800 font-semibold capitalize mx-auto text-center">Welcome {session.user.role}</div>
  <SellPageItems/>

  {/* <Link href='/api/auth/signout'>Logout</Link> */}
    
    </>
  );
};

export default App;



