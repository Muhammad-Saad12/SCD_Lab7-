import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
})
var userModel = mongoose.model("schema", userSchema);
export default userModel;