import exp from 'express'
const app = exp()
//importing 
import mongoose from 'mongoose'
const { connect } = mongoose
//importing the apis
import { userApp } from "./APIs/UserAPI.js"
import { productApp } from "./APIs/ProductAPI.js"

// body parser middleware
app.use(exp.json())

// routes
app.use('/user-api', userApp)
app.use('/product-api', productApp)

// database connection
async function connectDB() {
    try {
        await connect("mongodb://localhost:27017/anurag")
        console.log("DB connection successful")

        app.listen(4000, () => console.log("Server running on port 4000"))
    }
    catch (err) {
        console.log("Error in DB connection:", err)
    }
}

connectDB()