const {z}=require("zod");

//creating an object schema

const signupSchema = z.object({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at least of 3 chars."})
    .max(255,{message:"Name must not be more than 255 characters"}),
    
    email: z
    .string({required_error:"email is required"})
    .trim()
    .min(3,{message:"invalid email address"})
    .max(255,{message:"email must not be ,ore than 255 characters"}),
    phone: z
    .string({required_error:"phone is required"})
    .trim()
    .min(10,{message:"phone must be at least of 10 chars."})
    .max(20,{message:"phone must not be more than 255 characters"}),
    password: z
    .string({required_error:"password is required"})
    .trim()
    .min(6,{message:"password must be at least of 6 chars."})
    .max(1024,{message:"password must not be more than 1024 characters"}),
});
const loginSchema=z.object({
    email: z
    .string({required_error:"email is required"})
    .trim()
    .min(3,{message:"invalid email address"})
    .max(255,{message:"email must not be ,ore than 255 characters"}),

    password: z
    .string({required_error:"password is required"})
    .trim()
    .min(6,{message:"password must be at least of 6 chars."})
    .max(1024,{message:"password must not be more than 1024 characters"}),
});
module.exports = {signupSchema,loginSchema};
