import { NextResponse } from "next/server";
import StockItem from "@/app/mongodb/models/stockDataSchema";
import Dbconnect from "@/app/mongodb/DbConnect";

export async function POST(request){
    await Dbconnect();
    const {itemId, quantity}=request.body;
    try {
        const stockItem=await StockItem.findById(itemId);
        stockItem.totalStock -=quantity;
        await stockItem.save();
        console.log("Stock quantity updated successfully")
    } catch (error) {
        console.log("Not Working", error)
    }
    return NextResponse.json({message:"updating quantity...."})
}


