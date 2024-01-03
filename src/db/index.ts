import {connect} from "mongoose";
import { DB_NAME } from "../config";
const connectDB= async ()  => {
    try {
        const connectionInstance = await connect(`${process.env.MONOGO_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB;