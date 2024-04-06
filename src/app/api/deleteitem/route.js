import { NextResponse } from "next/server";
import Dbconnect from "@/app/mongodb/DbConnect";
import StockItem from "@/app/mongodb/models/stockDataSchema";

export async function POST(request){
    const stockInfo=await request.json();
    const { id }=stockInfo;
    console.log(stockInfo)
    await Dbconnect();
   const deletedItem= await StockItem.findByIdAndDelete(id)
   return NextResponse.json({"test":"message delete"}, deletedItem)
}

