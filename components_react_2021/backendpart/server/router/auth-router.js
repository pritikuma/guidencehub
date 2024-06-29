const express = require("express");
const router = express.Router();
//router.get("/", (req,res)=>{
//    res.status(200).send("welcome to pritis first website using router");
//});
router.route("/").get( (req,res)=>{
    res.status(200).send("welcome to pritis first website using router");
});
router.route('/register').get((req,res)=>{

});


module.exports = router