
console.log("MONGODB_URI:", process.env.MONGODB_URI);
const mongoose =require("mongoose");
//const URI = "mongodb://127.0.0.1:27017/priti";
//mongoose.connect(URI);
const URI =process.env.MONGODB_URI;
console.log(URI);
const connectDB = async () => {
  
    try{
     await mongoose.connect(URI);
     console.log("connection successful to DB");
    }catch(error){
        console.error("database connection failed",error.message);
        process.exit(1);
    }

};
connectDB();
module.exports = connectDB;


