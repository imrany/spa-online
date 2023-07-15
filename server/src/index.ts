import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"
import router from "./routes/api"
import mongoose from "mongoose"
import views from "./routes/views"
dotenv.config()

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("./views/public"))
app.set('view engine','ejs');
app.use(cors({}))
app.use("/api",router)
app.use(views)

//connect to momgodb
mongoose.set('strictQuery', false);
mongoose.connect(`${process.env.DATABASE_URL}`).then(()=>{
    //listening to server
    const port=process.env.PORT||8000;
    app.listen(port,()=>{
        console.log(`Server opening at Port ${port}`)
    })
}).catch(err=>console.log(err));
mongoose.Promise=global.Promise;