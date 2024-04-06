import { NextResponse } from "next/server";
import Dbconnect from "@/app/mongodb/DbConnect";
import Item from "@/app/mongodb/models/item";

export async function POST(request){
    await Dbconnect();
    const groData=await request.json();
    const groInfo=await Item.findById(groData.ItemId)
    return NextResponse.json(groInfo)
}