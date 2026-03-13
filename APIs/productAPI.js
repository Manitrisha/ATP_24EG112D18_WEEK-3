
/*
REST API with below operations
     a. Create product
     b. Read all products
     c. Read a product by productId
     d. Update a product by productId
     e. Delete a product by productId
*/
import exp from 'express'
import {ProductModel} from '../models/ProductModel.js'
export const productApp=exp.Router()
//create a product
productApp.post("/product",async(req,res)=>{
//get product
const newProduct=req.body;
 const newProductDocument=new ProductModel(newProduct);
    
    //save
    const result=await newProductDocument.save();
    console.log("result :",result)
//send res
res.status(200).json({message:"product is created"})

})

//read all products
productApp.get("/product",async(req,res)=>{
    const allpro=await ProductModel.find();

    res.status(200).json({message:"All products ",payload:allpro});

});
//read a product by productId
productApp.get("/product/:productId",async(req,res)=>{
    const proId=req.params.productId
    //find product id
    const allpro=await ProductModel.findOne({productId:proId})
    
    if(!proId){
       return  res.status(404).json({message:"Product is not found"});
    }
 res.status(200).json({message:" products based on id",payload:allpro});
})

//update a product by productID
productApp.put("/product/:productId",async(req,res)=>{
     //get modified product from req
        const modifiedproduct=req.body;
        const uid=req.params.productId;
        //find p by id & update
        const updatepro=await ProductModel.findOneAndUpdate({productId:uid},{$set:{...modifiedproduct}},{new:true,runValidators:true});
         if(!updatepro){
       return  res.status(404).json({message:"Product  ID is not found"});
    }
        //send res
        res.status(200).json({message:"user modified",payload:updatepro})
})
//delete a product by productID
productApp.delete("/product/:productId",async(req,res)=>{
     const uid=req.params.productId;
        const deletepro=await ProductModel.findOneAndDelete({productId:uid});
         if(!deletepro){
       return  res.status(404).json({message:" Deleted Product  ID is not found"});
    }
         res.status(200).json({message:"product is deleted",payload:deletepro})

})
    