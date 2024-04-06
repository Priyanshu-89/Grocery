import mongoose,{Schema} from "mongoose";

const itemSchema=new Schema({
    item:{type:String},
    category:{type:String},
    unit:{type:String},
    
})

const Item =mongoose.models.groceryItem || mongoose.model("groceryItem",itemSchema)

export default Item;
