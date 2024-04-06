import Dbconnect from "@/app/mongodb/DbConnect";
import GroceryItem from "@/app/mongodb/buyItemSchema";
import { NextResponse } from "next/server";
export async function GET(request){
    let buylist=[];
  await Dbconnect();
  buylist=await GroceryItem.find({})
    return NextResponse.json(buylist)
}