import { NextResponse } from "next/server";
import Dbconnect from "@/app/mongodb/DbConnect";
import GroceryItem from "@/app/mongodb/buyItemSchema";

export async function POST(request) {
   
        let groceryData = await request.json();
  console.log(groceryData)

     await Dbconnect();

      await GroceryItem.insertMany(groceryData)
      

    
        return NextResponse.json({ message: "Grocery Added" });
   
    }


   


