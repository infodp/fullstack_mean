import mongoose from "mongoose";

mongoose.set("strictQuery",false)

export const connectDB = (uri) => {
    return mongoose.connect(uri)
}