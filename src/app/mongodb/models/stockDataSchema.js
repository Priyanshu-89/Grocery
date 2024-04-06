import mongoose, {Schema} from "mongoose";

const stockDataSchema = new Schema({
    itemName:String,
    totalStock:Number,
    purchaseAmount:Number,
    sellAmount:Number,
    timestamp: { type: Date, default: Date.now },
    category:String,
    unit:String 
});
// console.log(stockDataSchema);

const StockItem = mongoose.models.stockitem || mongoose.model("stockitem", stockDataSchema);

export default StockItem;