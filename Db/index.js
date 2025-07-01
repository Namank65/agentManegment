import mongoose from "mongoose";

const dbName = "namansDb";

const ConnectDb = async () => {
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${dbName}`);
       console.log(`Data Base Connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`MongoDb Connection error ${error}`);
        process.exit(1)
    }
}

export default ConnectDb;