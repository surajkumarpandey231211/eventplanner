import mongoose from "mongoose"
import validator from "validator";

const messageSchema = new mongoose.Schema({
     name:{
          type: String,
          required:[true,"Name Required"],
          minLength:[3,"name must contain at least 3 characters"]
     },

     email:{
          type: String,
          required:[true,"Email Required"],
          validator:[validator.isEmail, "pls provide valid email"]
     },
     subject:{
          type: String,
          required:[true,"Subject Required"],
          minLength:[3,"subjest must contain at least 5 characters"]
     },
       message:{
          type: String,
          required:[true,"Name Required"],
          minLength:[3,"message must contain at least 10 characters"]
     },

});

export const Message = mongoose.model("MessageSchema");
