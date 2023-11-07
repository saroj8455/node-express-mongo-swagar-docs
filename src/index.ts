import express from "express";
import * as dotenv from "dotenv"
import sitemap from "express-sitemap-html"
import cors from "cors";
import * as uuid from "uuid";
import * as http_status from "http-status";
import AppErrorHandler from "../config/error-handeler";
import  {CONNECT} from "../config/connection"


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8082;

// app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

// DB Config
CONNECT();


app.get("/",(req, res, next)=>{
    res.status(http_status.OK).jsonp({
        message:"It's OK"
    })
})

app.post("/comments",(req, res, next)=>{
    const {title,description} = req.body;
    res.status(http_status.OK).jsonp({
        payload:{
            title,description,
            uuid:`${uuid.v4()}`
        }
    })
})


// Configure API DOC
sitemap.swagger("TODO APP ~ API DOCS",app);

// Config Error Handler
app.use(AppErrorHandler)
app.listen(8082,()=>{
    console.log(`⚡ Server is running under http://localhost:${PORT}`)
})
