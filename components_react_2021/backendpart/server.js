require("dotenv").config();
const express =require("express");
const cors = express("cors");
const app =express();
const router = require("./router/auth-router");
const connectDb =require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(cors);
app.use(express.json());
app.use("/api/auth",router);
app.use(errorMiddleware);
//app.get("/", (req,res)=>{
//    res.status(200).send("welcome to pritis first website");
//});
//app.get("/register", (req,res)=>{
//    res.status(200).send("welcome to signup webpage");
//});

const PORT =process.env.PORT||3001;
connectDb().then(()=>{
app.listen(PORT,() =>{
    console.log(`server is running at port:${PORT}`);
});
});

// const PORT =5000;
// app.listen(PORT,() =>{
//     console.log(`server is running at port:${PORT}`);
// });