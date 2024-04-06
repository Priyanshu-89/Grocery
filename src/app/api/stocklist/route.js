import Dbconnect from "@/app/mongodb/DbConnect";
import StockItem from "@/app/mongodb/models/stockDataSchema";
import { NextResponse } from "next/server";

export async function GET(request){
    let stockList=[];
    console.log(stockList)

    try{
        await Dbconnect();
        stockList=await StockItem.find({})
    }catch(error){
        console.log("Stock not found")
    }

    return NextResponse.json(stockList)
}