

const express = require("express");
const router = express.Router();

const authcontrollers = require("../controllers/auth-controllers");
const schema = require("../validators/auth-validators");
const validate = require("../middlewares/validate-middlewars");
     
router.route("/").get(authcontrollers.home);
   
router.route('/register')
.post(validate(schema.signupSchema),authcontrollers.register);
router.route('/login')
.post(validate(schema.loginSchema),authcontrollers.login);
// router.route("/").get( (req,res)=>{
//     res.status(200).send("welcome to first website using router");
// });


module.exports = router;



