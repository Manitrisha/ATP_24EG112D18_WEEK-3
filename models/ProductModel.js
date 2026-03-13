import {Schema,model} from 'mongoose'
//create product schema
const productSchema=new Schema({
productId:{
    type:Number,
    required:[true,"product ID is mandatarory"],
},
productName:{
    type:String,
    required:[true,"Product name "]
},
price:{
    type:Number,
    required:[true,"price of product"],
     min:[10000,"minimum price of product is 10000"],
     max:[50000,"maximum price of product is 50000"]
},
brand:{
    type:String,
    required:[true,"Brand of the product"]
},
},

{
    versionKey:false,
    timestamps:true,
},
);
//generation of product model
export const ProductModel=model("product",productSchema)