import mongoose from "mongoose";

let isConnected = false; //track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log("MongoDB is already connected");
        return;
    }
    // if we are not already connected used try catch
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "vendor",
            useNewURLParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}