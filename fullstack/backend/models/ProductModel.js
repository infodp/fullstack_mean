import mongoose from "mongoose";

//creamos un schema
const productSchema = new mongoose.Schema(
    {
        description: {
            type:String,
            required: [true, "Please complete the field"]
        },
        stock:{
            type:Number,
            required: [true, "Please complete the field"]
        },
        price:{
            type:Number,
            required: [true, "Please complete the field"]
        },
    },
    {
        timestamps:true,
        versionKey:false
    }
);

//creamos el modelo a partir del schema
export const ProductModel = mongoose.model("Product", productSchema);
