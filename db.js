import mongoose from "mongoose";
import colors from 'colors';
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.mongo_url);
        console.log(`Connected To Mongodb Database ${conn.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`Error in Mongodb ${error}`.bgRed.white);
    }
};
export default connectDB;