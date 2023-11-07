import * as mongoose from "mongoose";
import * as process from "process";

export const CONNECT = async () =>{
    const url = process.env.MONGO_URL || ""
    try {
        await  mongoose.connect(url);
        console.log("Remote DB Connected")
    } catch (e) {
        console.log(e);
        process.exit(1)
    }
}