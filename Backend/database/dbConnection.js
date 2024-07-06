import mongoose from"mongoose";

export const dbConnection = () =>{
     mongoose.connect(process.env.MONGO_URI,{dbName:"MERN_STACK_EVENT_MESSAGE"}).then (()=>{
          console.log("Connected to data bads!")
     }).catch(err=>{
          console.log("Some reeor occured while connecting to database",err);
     });
};