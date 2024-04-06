import Dbconnect from "@/app/mongodb/DbConnect";
import Item from "@/app/mongodb/models/item";
import { NextResponse } from "next/server";

export async function GET(request){
    let showAllData=[];
    try {
        await Dbconnect();
        showAllData=await Item.find({})
    } catch (error) {
       console.log("Error occur") 
    }

    return NextResponse.json(showAllData)
}