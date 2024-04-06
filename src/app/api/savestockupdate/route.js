import { NextResponse } from "next/server";
import Dbconnect from "@/app/mongodb/DbConnect";
import StockItem from "@/app/mongodb/models/stockDataSchema";
export async function POST(request){
    await Dbconnect();
    const stockUpdateData=await request.json()
    console.log('Received data:', stockUpdateData);
    let newStock={
        itemName:stockUpdateData.newItem,
        category:stockUpdateData.newCategory,
        unit:stockUpdateData.newUnit,
        sellAmount:stockUpdateData.newSellPrice,
        purchaseAmount:stockUpdateData.newPurchasePrice
    }
        const stockInfo=await StockItem.findByIdAndUpdate(stockUpdateData.id, newStock)
        return NextResponse.json({message:"updating"}, stockInfo)
    }
