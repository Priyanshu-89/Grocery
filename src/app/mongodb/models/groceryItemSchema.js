// import mongoose, { Schema } from "mongoose";

// const groceryItemSchema = new Schema({
//   rate: { type: Number, required: true },
//   quantity: { type: Number, required: true },
//   amount: { type: Number, required: true },
//   timestamp: { type: Date, default: Date.nitemName: String ,
    // category:String,
    // unit:Stringow },
// });

// const GroceryItem = mongoose.models.GroceryItem || mongoose.model("buyItem", groceryItemSchema);

// export default GroceryItem;


import mongoose, { Schema } from "mongoose";
import Item from "./item"; 

const groceryItemSchema = new Schema({
     Rate:   Number,
     Quantity:   Number,
     amount:  Number,
    timestamp: { type: Date, default: Date.now },
     
   
});
console.log(groceryItemSchema)
const GroceryItem = mongoose.models.buyitem || mongoose.model("buyitem", groceryItemSchema);

export default GroceryItem;

