import mongoose from "mongoose";

const Dbconnect= async()=>{
    try {
        await   mongoose.connect("mongodb://127.0.0.1:27017/groceryitem") 
        console.log("Db connected")
    } catch (error) {
       console.log(error) 
    }

}

export default Dbconnect;