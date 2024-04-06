import { NextResponse } from "next/server";
import Dbconnect from "@/app/mongodb/DbConnect";
import StockItem from "@/app/mongodb/models/stockDataSchema";

export async function POST(request){
    await Dbconnect();
    const stockData=await request.json();
    const stockInfo=await StockItem.findById(stockData.ItemId)
    return NextResponse.json(stockInfo)
}