
import mongoose from "mongoose"

const {MONGODB_URI} = process.env 

// this is a good fix for string / undefined

export const connectionMongo = async() => {
    if(!MONGODB_URI){
        throw new Error("MONGO URI IS NOT AVAILABLE")
    }
    
    await mongoose.connect(MONGODB_URI)
}