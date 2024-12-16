import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    mobile: {
        type: Number,
        required:true,
        trim:true,
        unique:true,
    },
    password: {
        type: String,
        required:true,
        trim:true,
        unique:true,
    }
})


const user = mongoose.model('user',userSchema);

export default user;