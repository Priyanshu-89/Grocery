import { NextResponse } from "next/server";
import Dbconnect from "@/app/mongodb/DbConnect";
import Item from "@/app/mongodb/models/item";
export async function POST(request){
    await Dbconnect();
    const groUpdateData=await request.json()
    let newGro={
        item:groUpdateData.newItem,
        category:groUpdateData.newCategory,
        unit:groUpdateData.newUnit
    }
    const groUpdateinfo =await Item.findByIdAndUpdate(groUpdateData.id, newGro)
    return NextResponse.json({message:"updating...."})
}