import mongoose from "mongoose"
export const connectDb = async ()=>{
    
    try {
       await mongoose.connect(process.env.MONGODB_STRING!)
       console.log("Db Connected!")
    } catch (error) {
        console.log(error)
        console.log("error")
    }
}