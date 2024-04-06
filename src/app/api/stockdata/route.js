import { NextResponse } from "next/server";
import Dbconnect from "@/app/mongodb/DbConnect";
import StockItem from "@/app/mongodb/models/stockDataSchema";

export async function POST(request){
    let stockData=await request.json();
    // console.log(stockData);
    await Dbconnect();
    let stockEntry={
        itemName:stockData.itemName,
        totalStock:stockData.totalStock,
        purchaseAmount:stockData.purchaseAmount,
        sellAmount:stockData.sellAmount,
        category:stockData.category,
        unit:stockData.unit
    }
    await StockItem.create(stockEntry)
    return NextResponse.json({ message: "Stock Added" });
}