import mongoose, { Schema } from "mongoose";

const buyItemSchema = new Schema({
    itemName:String,
    totalStock:Number,
     purchaseAmount:Number,
    sellAmount:Number,
    timestamp: { type: Date, default: Date.now },
    category:String,
    unit:String 
    });

    console.log(buyItemSchema)
const GroceryItem = mongoose.models.sellitem || mongoose.model("sellitem", buyItemSchema);

export default GroceryItem;

