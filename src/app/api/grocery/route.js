import { NextResponse } from "next/server";
import Dbconnect from "@/app/mongodb/DbConnect";
import Item from "@/app/mongodb/models/item";

export async function GET(request){
    await Dbconnect();
    return NextResponse.json({message:"Testing"})
}

export async function POST(request){
    const itemData=await request.json();
    console.log(itemData)
    await Dbconnect();
    let newItem = {
        item:itemData.itemName,
        category:itemData.category,
        unit: itemData.unit
    }
   await Item.create(newItem);

//    let result= await Item.find({item:itemData.itemName})
    return NextResponse.json(itemData)
}